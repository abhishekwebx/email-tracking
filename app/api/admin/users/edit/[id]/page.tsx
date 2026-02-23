"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function EditUser({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user");

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`/api/admin/users/${params.id}`);
      const data = await res.json();
      setName(data.name);
      setEmail(data.email);
      setRole(data.role);
    };
    fetchUser();
  }, [params.id]);

  const handleSave = async () => {
    await fetch(`/api/admin/users/${params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, role }),
    });
    router.push("/crm/admin");
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow rounded space-y-4">
      <h1 className="text-xl font-bold">Edit User</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-2 rounded"
        placeholder="Name"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border p-2 rounded"
        placeholder="Email"
      />
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="w-full border p-2 rounded"
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button
        onClick={handleSave}
        className="w-full bg-blue-600 text-white py-2 rounded"
      >
        Save
      </button>
    </div>
  );
}
