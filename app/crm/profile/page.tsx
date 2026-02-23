"use client";

import LogoutButton from "@/components/ui/LogoutButton";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Profile {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  avatar?: string;
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }

      const res = await fetch("/api/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      setProfile(data);
      setLoading(false);
    };

    fetchProfile();
  }, []);

  if (loading) return <div className="p-6">Loading...</div>;
  if (!profile) return <div className="p-6">Unauthorized</div>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Profile Details</h1>

      <div className="bg-white shadow rounded-xl p-6 space-y-4">
        {profile.avatar && (
          <Image
            src={profile.avatar}
            alt="profile"
            width={120}
            height={120}
            className="rounded-full"
          />
        )}

        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>

        {profile.phone && (
          <p><strong>Phone:</strong> {profile.phone}</p>
        )}

        {profile.company && (
          <p><strong>Company:</strong> {profile.company}</p>
        )}
      </div>

      <LogoutButton />
    </div>
  );
}
