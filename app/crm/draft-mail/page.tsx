/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function DraftList() {
  const [drafts, setDrafts] = useState<any[]>([]);
  const router = useRouter();

  const loadDrafts = async () => {
    const res = await fetch("/api/getdraft");
    const data = await res.json();
    setDrafts(data);
  };

  useEffect(() => {
    loadDrafts();
  }, []);

  /* =====================
     DELETE DRAFT
  ====================== */
  const deleteDraft = async (id: string) => {
    const result = await Swal.fire({
      title: "Delete Draft?",
      text: "You won't be able to recover this draft!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      await fetch(`/api/draft/delete?id=${id}`, {
        method: "DELETE",
      });

      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Draft deleted",
        showConfirmButton: false,
        timer: 2000,
      });

      loadDrafts();
    } catch {
      Swal.fire("Error", "Failed to delete draft", "error");
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Draft Emails</h2>
        <p className="text-gray-500 text-sm">
          Manage and edit your saved draft emails
        </p>
      </div>

      {/* Card */}
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden border">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr className="text-left text-sm text-gray-600">
              <th className="p-4">Subject</th>
              <th className="p-4">Recipients</th>
              <th className="p-4 text-center">Status</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {drafts.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center py-12 text-gray-400">
                  No Draft Emails Found
                </td>
              </tr>
            )}

            {drafts.map((d: any) => (
              <tr key={d._id} className="border-b hover:bg-gray-50 transition">
                {/* Subject */}
                <td className="p-4 font-medium text-gray-800">
                  {d.subject || "No Subject"}
                </td>

                {/* Recipients */}
                <td className="p-4 text-gray-600">
                  {d.to?.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {d.to.slice(0, 3).map((email: string) => (
                        <span
                          key={email}
                          className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                        >
                          {email}
                        </span>
                      ))}

                      {d.to.length > 3 && (
                        <span className="text-xs text-gray-400">
                          +{d.to.length - 3} more
                        </span>
                      )}
                    </div>
                  ) : (
                    "-"
                  )}
                </td>

                {/* Status */}
                <td className="p-4 text-center">
                  <span className="bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full">
                    Draft
                  </span>
                </td>

                {/* Actions */}
                <td className="p-4 text-center space-x-2">
                  <button
                    onClick={() => {
                      router.push(`/crm/send/${d._id}`);
                      sessionStorage.removeItem("route");
                    }}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteDraft(d._id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
