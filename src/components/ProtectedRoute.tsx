
import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { supabase } from "../lib/supabase";
import type { Session } from "@supabase/supabase-js";

type Props = {
  children: React.ReactNode;
  requiredRole?: "buyer" | "seller";
};

const ProtectedRoute: React.FC<Props> = ({
  children,
  requiredRole,
}) => {
  const location = useLocation();

  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<Session | null>(null);
  const [role, setRole] = useState<"buyer" | "seller" | null>(null);

  useEffect(() => {
    let mounted = true;

    const loadUser = async () => {
      try {
        const {
          data: { session: currentSession },
          error,
        } = await supabase.auth.getSession();

        if (error) throw error;

        if (!mounted) return;

        setSession(currentSession);

        if (!currentSession?.user) {
          setRole(null);
          setLoading(false);
          return;
        }

        const { data: profile, error: profileError } =
          await supabase
            .from("profiles")
            .select("role")
            .eq("id", currentSession.user.id)
            .single();

        if (!mounted) return;

        if (profileError) {
          console.error(
            "Error loading user role:",
            profileError.message
          );
          setRole(null);
        } else if (
          profile?.role === "buyer" ||
          profile?.role === "seller"
        ) {
          setRole(profile.role);
        } else {
          setRole(null);
        }

        setLoading(false);
      } catch (error) {
        console.error("Authentication check failed:", error);

        if (!mounted) return;

        setSession(null);
        setRole(null);
        setLoading(false);
      }
    };

    void loadUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event, newSession) => {
        if (!mounted) return;

        setSession(newSession);
        setRole(null);
        setLoading(true);

        // Fetch the profile after the auth callback finishes.
        setTimeout(() => {
          if (mounted) {
            void loadUser();
          }
        }, 0);
      }
    );

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  // LOADING
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-amber-400 border-t-transparent" />

          <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
            Checking your account...
          </p>
        </div>
      </div>
    );
  }

  // VISITORS MUST REGISTER FIRST
  if (!session?.user) {
    return (
      <Navigate
        to="/register"
        replace
        state={{ from: location }}
      />
    );
  }

  // SELLER / BUYER ROLE PROTECTION
  if (requiredRole && role !== requiredRole) {
    if (role === "seller") {
      return <Navigate to="/seller/dashboard" replace />;
    }

    if (role === "buyer") {
      return <Navigate to="/marketplace" replace />;
    }

    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;



