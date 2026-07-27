import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import {
  BellIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

type Profile = {
  full_name: string;
  avatar_url: string | null;
};

const SellerHeader: React.FC = () => {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const loadProfile = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data } = await supabase
        .from("profiles")
        .select("full_name, avatar_url")
        .eq("id", user.id)
        .single();

      if (data) {
        setProfile(data);
      }
    };

    loadProfile();
  }, []);

  const today = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">

      {/* LEFT */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Welcome,
          <span className="text-amber-400">
            {" "}
            {profile?.full_name ?? "Seller"}
          </span>
        </h1>

        <p className="mt-2 text-gray-500 dark:text-gray-400">
          {today}
        </p>

        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Manage your products, sales and digital downloads.
        </p>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-5">

        <button className="relative p-3 rounded-full bg-white dark:bg-gray-900 shadow hover:scale-105 transition">
          <BellIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />

          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>
        </button>

        {profile?.avatar_url ? (
          <img
            src={profile.avatar_url}
            alt={profile.full_name}
            className="w-12 h-12 rounded-full object-cover border-2 border-amber-400"
          />
        ) : (
          <UserCircleIcon className="w-12 h-12 text-gray-500" />
        )}

      </div>

    </header>
  );
};

export default SellerHeader;