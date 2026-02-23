"use client";

import { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { EditorRef } from "react-email-editor";

// ✅ Lazy load editor (performance fix)
const EmailEditor = dynamic(() => import("react-email-editor"), {
  ssr: false,
});

interface Props {
  body: string;
  setBody: (html: string) => void;
  setDesign?: (design: string) => void;
  design?: string;
}

export default function AdvanceEmailBuilder({
  setBody,
  setDesign,
  design,
}: Props) {
  const emailEditorRef = useRef<EditorRef>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // ✅ Auto Save Function
  const autoSave = () => {
    const editor = emailEditorRef.current?.editor;

    if (!editor) return;

    editor.exportHtml((data: { html: string; design: string }) => {
      setBody(data.html);

      if (setDesign) {
        setDesign(data.design);
      }
    });
  };

  // ✅ Load saved design when editor ready
  const handleReady = () => {
    const editor = emailEditorRef.current?.editor;

    if (!editor) return;

    // Load existing design
    if (design) {
      editor.loadDesign(design);
    }

    // Start autosave
    intervalRef.current = setInterval(autoSave, 5000);
  };

  // ✅ Cleanup interval (VERY IMPORTANT)
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div>
      <EmailEditor
        ref={emailEditorRef}
        style={{ height: "500px" }}
        onReady={handleReady}
      />
    </div>
  );
}
