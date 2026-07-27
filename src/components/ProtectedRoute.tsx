import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import type { User } from "@supabase/supabase-js";

type Props = {
  children: React.ReactNode;
};

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<"buyer" | "seller" | null>(null);

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      console.log("🔵 User:", user);

      setUser(user);

      if (user) {
        const { data: profile, error } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", user.id)
          .single();

        console.log("🟢 Profile:", profile);
        console.log("🔴 Error:", error);

        if (!error && profile) {
          setRole(profile.role);
        }
      }

      setLoading(false);
    };

    checkUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      const currentUser = session?.user ?? null;

      console.log("🟡 Auth State User:", currentUser);

      setUser(currentUser);

      if (currentUser) {
        const { data: profile, error } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", currentUser.id)
          .single();

        console.log("🟢 Auth Profile:", profile);
        console.log("🔴 Auth Error:", error);

        setRole(profile?.role ?? null);
      } else {
        setRole(null);
      }

      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  console.log("🟣 Loading:", loading);
  console.log("🟣 User State:", user);
  console.log("🟣 Role State:", role);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        Loading...
      </div>
    );
  }

  if (!user) {
    console.log("➡️ Redirecting to /login");
    return <Navigate to="/login" replace />;
  }

  if (role !== "seller") {
    console.log("➡️ Redirecting to /marketplace because role is:", role);
    return <Navigate to="/marketplace" replace />;
  }

  console.log("✅ Seller authenticated. Rendering dashboard.");

  return <>{children}</>;
};

export default ProtectedRoute;