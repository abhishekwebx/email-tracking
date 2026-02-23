"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}

interface Email {
  _id: string;
  to: string;
  subject: string;
  senderName: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [emails, setEmails] = useState<Email[]>([]);
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  useEffect(() => {
    if (user.role !== "admin") {
      router.push("/crm/dashboard");
    }

    const fetchData = async () => {
      try {
        const usersRes = await fetch("/api/admin/users", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        const emailsRes = await fetch("/api/admin/emails", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setUsers(await usersRes.json());
        setEmails(await emailsRes.json());
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading admin data...</p>;

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      {/* USERS */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Users</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Role</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u._id} className="hover:bg-gray-100">
                <td className="p-2 border">{u.name}</td>
                <td className="p-2 border">{u.email}</td>
                <td className="p-2 border">{u.role}</td>
                <td className="p-2 border space-x-2">
                  <button
                    className="px-3 py-1 bg-yellow-500 text-white rounded"
                    onClick={() =>
                      router.push(`/crm/admin/users/edit/${u._id}`)
                    }
                  >
                    Edit
                  </button>
                  <button
                    className="px-3 py-1 bg-red-600 text-white rounded"
                    onClick={async () => {
                      if (!confirm("Delete this user?")) return;
                      await fetch(`/api/admin/users/${u._id}`, {
                        method: "DELETE",
                        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
                      });
                      setUsers(users.filter((usr) => usr._id !== u._id));
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* EMAILS */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Emails</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">To</th>
              <th className="p-2 border">Subject</th>
              <th className="p-2 border">Sender</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {emails.map((e) => (
              <tr key={e._id} className="hover:bg-gray-100">
                <td className="p-2 border">{e.to}</td>
                <td className="p-2 border">{e.subject}</td>
                <td className="p-2 border">{e.senderName}</td>
                <td className="p-2 border space-x-2">
                  <button
                    className="px-3 py-1 bg-yellow-500 text-white rounded"
                    onClick={() => router.push(`/send/${e._id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-3 py-1 bg-red-600 text-white rounded"
                    onClick={async () => {
                      if (!confirm("Delete this email?")) return;
                      await fetch(`/api/admin/emails/${e._id}`, {
                        method: "DELETE",
                      });
                      setEmails(emails.filter((em) => em._id !== e._id));
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
