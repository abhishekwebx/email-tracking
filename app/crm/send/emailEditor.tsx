/* eslint-disable react-hooks/static-components */
"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import "./editor.css";

import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  List,
  ListOrdered,
  LinkIcon,
  ImageIcon,
  Undo,
  Redo,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Upload,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";

interface Props {
  body: string;
  setBody: (html: string) => void;
}

export default function SimpleEmailEditor({ body, setBody }: Props) {
  const [imageUrl, setImageUrl] = useState("");
  const [showImageInput, setShowImageInput] = useState(false);

  const fileRef = useRef<HTMLInputElement>(null);

  // ⭐ Editor Setup
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4, 5, 6],
        },
        bulletList: {
          keepMarks: true,
        },
        orderedList: {
          keepMarks: true,
        },
      }),

      Underline,

      Link.configure({
        openOnClick: false,
        autolink: true,
      }),

      Image.configure({
        inline: false,
        allowBase64: true,
      }),

      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],

    content: body || "<p>Start writing your email...</p>",

    immediatelyRender: false,

    onUpdate({  }) {
      setBody(editor.getHTML());
    },
  });

  // ⭐ Sync external body
  useEffect(() => {
    if (!editor) return;
    if (body !== editor.getHTML()) {
      editor.commands.setContent(body);
    }
  }, [body, editor]);

  if (!editor) return null;

  // ⭐ Upload Image
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      editor.chain().focus().setImage({ src: reader.result as string }).run();
    };

    reader.readAsDataURL(file);
  };

  // ⭐ Toolbar Button
  const Btn = ({
    onClick,
    active,
    children,
  }: {
    onClick: () => void;
    active?: boolean;
    children: React.ReactNode;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={`p-2 rounded transition ${
        active ? "bg-blue-200" : "hover:bg-gray-200"
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="border rounded-xl shadow-sm bg-white">

      {/* ⭐ TOOLBAR */}
      <div className="flex flex-wrap items-center gap-2 border-b p-2 bg-gray-50">

        {/* Heading Dropdown */}
        <select
          className="border rounded p-1"
          onChange={(e) => {
            const level = Number(e.target.value);

            if (level === 0) {
              editor.chain().focus().setParagraph().run();
            } else {
              editor.chain().focus().toggleHeading({ level }).run();
            }
          }}
        >
          <option value="0">Paragraph</option>
          <option value="1">H1</option>
          <option value="2">H2</option>
          <option value="3">H3</option>
          <option value="4">H4</option>
          <option value="5">H5</option>
          <option value="6">H6</option>
        </select>

        <Btn
          onClick={() => editor.chain().focus().toggleBold().run()}
          active={editor.isActive("bold")}
        >
          <Bold size={18} />
        </Btn>

        <Btn
          onClick={() => editor.chain().focus().toggleItalic().run()}
          active={editor.isActive("italic")}
        >
          <Italic size={18} />
        </Btn>

        <Btn
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          active={editor.isActive("underline")}
        >
          <UnderlineIcon size={18} />
        </Btn>

        <Btn
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          active={editor.isActive("bulletList")}
        >
          <List size={18} />
        </Btn>

        <Btn
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          active={editor.isActive("orderedList")}
        >
          <ListOrdered size={18} />
        </Btn>

        {/* Link */}
        {/* <Btn
          onClick={() => {
            const url = prompt("Enter URL");
            if (!url) return;
            editor.chain().focus().setLink({ href: url }).run();
          }}
        >
          <LinkIcon size={18} />
        </Btn> */}

        {/* Image URL */}
        <Btn onClick={() => setShowImageInput(!showImageInput)}>
          <ImageIcon size={18} />
        </Btn>

        {/* Upload Image */}
        <Btn onClick={() => fileRef.current?.click()}>
          <Upload size={18} />
        </Btn>

        <Btn onClick={() => editor.chain().focus().setTextAlign("left").run()}>
          <AlignLeft size={18} />
        </Btn>

        <Btn
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
        >
          <AlignCenter size={18} />
        </Btn>

        <Btn
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
        >
          <AlignRight size={18} />
        </Btn>

        <Btn onClick={() => editor.chain().focus().undo().run()}>
          <Undo size={18} />
        </Btn>

        <Btn onClick={() => editor.chain().focus().redo().run()}>
          <Redo size={18} />
        </Btn>
      </div>

      {/* ⭐ IMAGE URL INPUT */}
      {showImageInput && (
        <div className="flex gap-2 p-2 border-b bg-gray-100">
          <input
            className="border p-2 flex-1 rounded"
            placeholder="Paste image URL..."
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />

          <button
            className="bg-blue-500 text-white px-4 rounded"
            onClick={() => {
              if (!imageUrl) return;

              editor.chain().focus().setImage({ src: imageUrl }).run();
              setImageUrl("");
              setShowImageInput(false);
            }}
          >
            Insert
          </button>
        </div>
      )}

      {/* Hidden Upload */}
      <input
        type="file"
        accept="image/*"
        ref={fileRef}
        hidden
        onChange={handleImageUpload}
      />

      {/* ⭐ EDITOR */}
      <EditorContent
        editor={editor}
        className="ProseMirror min-h-[350px] p-4 focus:outline-none"
      />
    </div>
  );
}
