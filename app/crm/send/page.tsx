"use client";

import { useState, useEffect } from "react";
import "./send-email.css";
import AuthGuard from "@/components/AuthGuard";
import { useRouter, useSearchParams } from "next/navigation";
import SimpleEmailEditor from "./emailEditor";

interface SendEmailProps {
  emailId?: string;
}

export default function SendEmail({ emailId }: SendEmailProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const templateFromUrl = searchParams.get("template");

  const [to, setTo] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [senderName, setSenderName] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [draftId, setDraftId] = useState<string | null>(emailId || null);
  const [templates, setTemplates] = useState<any[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState("");

  /* ---------------------------------------------------
     LOAD TEMPLATES
  --------------------------------------------------- */

  useEffect(() => {
    const loadTemplates = async () => {
      try {
        const res = await fetch("/api/templates?limit=50");
        const data = await res.json();

        setTemplates(Array.isArray(data.data) ? data.data : []);
      } catch (err) {
        console.error("Template load error", err);
      }
    };

    loadTemplates();
  }, []);

  /* ---------------------------------------------------
     AUTO LOAD TEMPLATE FROM URL
  --------------------------------------------------- */

  useEffect(() => {
    if (!templateFromUrl) return;
    if (!Array.isArray(templates)) return;

    const template = templates.find(
      (t) => t._id === templateFromUrl
    );

    if (template) {
      setSelectedTemplate(template._id);
      setSubject(template.subject || "");
      setBody(template.body || "");
    }
  }, [templateFromUrl, templates]);

  /* ---------------------------------------------------
     TEMPLATE SELECT HANDLER
  --------------------------------------------------- */

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId);

    const template = templates.find((t) => t._id === templateId);

    if (template) {
      setSubject(template.subject || "");
      setBody(template.body || "");
    }
  };

  /* ---------------------------------------------------
     LOAD USER
  --------------------------------------------------- */

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    setSenderName(user?.email || "");
  }, []);

  /* ---------------------------------------------------
     LOAD DRAFT
  --------------------------------------------------- */

  useEffect(() => {
    if (!emailId) return;

    const loadDraft = async () => {
      try {
        const res = await fetch(`/api/emails/${emailId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.error);

        setTo(data.to || []);
        setSubject(data.subject || "");
        setBody(data.body || "");
        setSenderName(data.senderName || "");
        setDraftId(data._id);
      } catch (err) {
        console.error("Draft load error", err);
      }
    };

    loadDraft();
  }, [emailId]);

  /* ---------------------------------------------------
     EMAIL HANDLING
  --------------------------------------------------- */

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const addEmail = (email: string) => {
    email = email.trim();

    if (!isValidEmail(email)) {
      setError("Invalid email format");
      return;
    }

    if (!to.includes(email)) {
      setTo([email, ...to]);
    }

    setInputValue("");
    setError(null);
  };

  const removeEmail = (email: string) => {
    setTo(to.filter((e) => e !== email));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      addEmail(inputValue);
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const paste = e.clipboardData.getData("text");
    const emails = paste.split(/[,;\s]+/);

    emails.forEach((email) => {
      if (isValidEmail(email) && !to.includes(email)) {
        setTo((prev) => [email, ...prev]);
      }
    });

    e.preventDefault();
  };

  const isFormValid = () =>
    to.length > 0 && subject.trim() !== "" && body.trim() !== "";

  /* ---------------------------------------------------
     SAVE DRAFT
  --------------------------------------------------- */

  const saveAsDraft = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/draft", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          id: draftId,
          senderName,
          to,
          subject,
          body,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      setDraftId(data._id);
      router.push("/crm/draft-mail");
    } catch (err: any) {
      setError(err.message || "Failed to save draft");
    } finally {
      setLoading(false);
    }
  };

  /* ---------------------------------------------------
     SEND EMAIL
  --------------------------------------------------- */

  const sendEmail = async () => {
    if (!isFormValid()) {
      setError("All fields are required");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          id: draftId,
          to,
          subject,
          body,
          senderName,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      setSuccess(true);
      setTo([]);
      setSubject("");
      setBody("");
      setDraftId(null);
    } catch (err: any) {
      setError(err.message || "Failed to send email");
    } finally {
      setLoading(false);
    }
  };

  /* ---------------------------------------------------
     UI
  --------------------------------------------------- */

  return (
    <AuthGuard>
      <div className="container">
        <div className="card">
          <h1>Send Email</h1>
          <p className="subtitle">Track opens in real-time</p>

          {error && <div className="error">{error}</div>}
          {success && (
            <div className="success">Email sent successfully!</div>
          )}

          {/* TEMPLATE SELECTOR */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">
              Select Template
            </label>

            <select
              value={selectedTemplate}
              onChange={(e) => handleTemplateSelect(e.target.value)}
              className="w-full border rounded-xl px-4 py-3"
            >
              <option value="">Choose Template</option>

              {Array.isArray(templates) &&
                templates.map((template) => (
                  <option key={template._id} value={template._id}>
                    {template.title}
                    {template.category
                      ? ` (${template.category})`
                      : ""}
                  </option>
                ))}
            </select>

            {/* Template Preview */}
            {selectedTemplate && (
              <div className="mt-4 border rounded-xl p-4 bg-indigo-50">
                {(() => {
                  const template = templates.find(
                    (t) => t._id === selectedTemplate
                  );

                  if (!template) return null;

                  return (
                    <>
                      <h3 className="font-semibold text-indigo-700">
                        {template.title}
                      </h3>
                      <p className="text-sm mt-2">
                        {template.subject}
                      </p>
                    </>
                  );
                })()}
              </div>
            )}
          </div>

          {/* TO */}
          <label>To</label>
          <div className="email-wrapper">
            {to.map((email) => (
              <span key={email} className="chip">
                {email}
                <button onClick={() => removeEmail(email)}>×</button>
              </span>
            ))}

            <input
              type="email"
              placeholder="Type email & press Enter"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              onPaste={handlePaste}
            />
          </div>

          {/* SUBJECT */}
          <label>Subject</label>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />

          {/* MESSAGE */}
          <label>Message</label>
          <SimpleEmailEditor body={body} setBody={setBody} />

          {/* BUTTONS */}
          <button
            className="send-button ml-2"
            onClick={saveAsDraft}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Email as Draft"}
          </button>

          <button
            className="send-button"
            onClick={sendEmail}
            disabled={!isFormValid()}
          >
            {loading ? "Sending..." : "Send Email"}
          </button>
        </div>
      </div>
    </AuthGuard>
  );
}
