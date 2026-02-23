"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function TemplatesList() {
  const [templates, setTemplates] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const limit = 9;
  const router = useRouter();

  /* --------------------------------------------
     LOAD TEMPLATES
  -------------------------------------------- */
  const loadTemplates = async () => {
    try {
      const res = await fetch(
        `/api/templates?search=${search}&page=${page}&limit=${limit}`
      );

      const data = await res.json();

      // ✅ FIXED RESPONSE KEY
      setTemplates(Array.isArray(data.data) ? data.data : []);
      setTotal(data.total || 0);

    } catch (err) {
      console.error("Template load error", err);
      setTemplates([]);
    }
  };

  useEffect(() => {
    loadTemplates();
  }, [search, page]);

  /* --------------------------------------------
     DELETE TEMPLATE
  -------------------------------------------- */
  const deleteTemplate = async (id: string) => {
    const result = await Swal.fire({
      title: "Delete Template?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      await fetch(`/api/templates/${id}`, {
        method: "DELETE",
      });

      setTemplates((prev) => prev.filter((t) => t._id !== id));

      Swal.fire("Deleted!", "Template deleted.", "success");

    } catch {
      Swal.fire("Error", "Failed to delete template", "error");
    }
  };

  const totalPages = Math.ceil(total / limit);

  /* --------------------------------------------
     UI
  -------------------------------------------- */

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Email Templates
          </h1>

          <button
            onClick={() => router.push("/crm/templates/create")}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 cursor-pointer"
          >
            + Create Template
          </button>
        </div>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search templates..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Template Grid */}
        {templates.length === 0 ? (
          <div className="bg-white p-10 rounded-xl shadow text-center">
            No templates found
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((t) => (
              <div
                key={t._id}
                className="bg-indigo-50 rounded-xl shadow p-5 flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-lg font-semibold text-indigo-700 mb-2">
                    {t.title}
                  </h2>

                  {t.category && (
                    <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full mb-3 inline-block">
                      {t.category}
                    </span>
                  )}

                  <p className="text-sm text-gray-500 line-clamp-2">
                    {t.subject || "No subject"}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex justify-between items-center mt-5">

                  <div className="flex gap-3">
                    <button
                      onClick={() =>
                        router.push(`/crm/templates/create?id=${t._id}`)
                      }
                      className="text-sm text-blue-600 border border-blue-600 px-3 py-1 rounded hover:bg-blue-600 hover:text-white transition cursor-pointer"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteTemplate(t._id)}
                      className="text-sm text-red-600 border border-red-600 px-3 py-1 rounded hover:bg-red-600 hover:text-white transition cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>

                  <button
                    onClick={() =>
                      router.push(`/crm/send?template=${t._id}`)
                    }
                    className="bg-gray-100 px-3 py-1 rounded hover:bg-gray-200 text-sm cursor-pointer"
                  >
                    Use In
                  </button>

                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 gap-4">

            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="px-4 py-2 border rounded disabled:opacity-40"
            >
              Prev
            </button>

            <span className="px-4 py-2">
              Page {page} of {totalPages}
            </span>

            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="px-4 py-2 border rounded disabled:opacity-40"
            >
              Next
            </button>

          </div>
        )}
      </div>
    </div>
  );
}
