"use client";

import { useEffect, useState } from "react";
import SimpleEmailEditor from "../../send/emailEditor";
import { useRouter, useSearchParams } from "next/navigation";

export default function TemplateEditor() {
  const router = useRouter();
  const params = useSearchParams();

  const templateId = params.get("id");

  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /* =====================
     LOAD TEMPLATE (EDIT)
  ====================== */
  useEffect(() => {
    if (!templateId) return;

    const loadTemplate = async () => {
      try {
        const res = await fetch(`/api/templates/${templateId}`);
        const data = await res.json();

        if (!res.ok) throw new Error(data.error);

        setTitle(data.title || "");
        setSubject(data.subject || "");
        setBody(data.body || "");
        setCategory(data.category || "");
      } catch (err: any) {
        setError(err.message || "Failed to load template");
      }
    };

    loadTemplate();
  }, [templateId]);

  /* =====================
     SAVE TEMPLATE
     (CREATE + UPDATE)
  ====================== */
const saveTemplate = async () => {
  setError("");

  if (!title || !subject || !body) {
    setError("All fields are required");
    return;
  }

  setLoading(true);

  try {
    const payload = { title, subject, body, category };

    const res = await fetch(
      templateId
        ? `/api/templates/${templateId}`
        : `/api/templates/create`,
      {
        method: templateId ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await res.json();
    if (!res.ok) throw new Error(data.error);

    router.push("/crm/templates");
  } catch (err: any) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            {templateId ? "Edit Email Template" : "Create Email Template"}
          </h1>
        </div>

        {/* ERROR */}
        {error && (
          <div className="mb-4 bg-red-100 text-red-700 p-3 rounded">
            {error}
          </div>
        )}

        {/* TEMPLATE NAME */}
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Template Name
          </label>
          <input
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            value={title}
            placeholder="Enter template name"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* CATEGORY */}
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Category
          </label>

          <select
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Proposal">Proposal</option>
            <option value="Follow Up">Follow Up</option>
            <option value="Reminder">Reminder</option>
            <option value="Thank You">Thank You</option>
          </select>
        </div>

        {/* SUBJECT */}
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Subject
          </label>
          <input
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            value={subject}
            placeholder="Enter email subject"
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        {/* EMAIL EDITOR */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Email Content
          </label>

          <SimpleEmailEditor body={body} setBody={setBody} />
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex justify-end gap-4">
          <button
            onClick={() => router.push("/crm/templates")}
            className="px-5 py-2 rounded-lg border hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={saveTemplate}
            disabled={loading}
            className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            {loading
              ? templateId
                ? "Updating..."
                : "Saving..."
              : templateId
              ? "Update Template"
              : "Save Template"}
          </button>
        </div>
      </div>
    </div>
  );
}
