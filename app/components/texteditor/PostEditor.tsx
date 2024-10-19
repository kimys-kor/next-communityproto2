"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";

const PostEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Heading.configure({ levels: [1, 2, 3] }),
      BulletList,
      OrderedList,
      ListItem,
    ],
    content: "<p>Write something cool!</p>",
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl border border-solid border-gray-300 w-200 h-100 focus:outline-none",
      },
    },
    immediatelyRender: false,
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="w-full">
      <div className="flex space-x-2 mb-2 justify-center">
        {/* Bold button */}
        <button
          className={`p-2 rounded ${
            editor.isActive("bold") ? "bg-gray-200" : ""
          }`}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          Bold
        </button>
        {/* Italic button */}
        <button
          className={`p-2 rounded ${
            editor.isActive("italic") ? "bg-gray-200" : ""
          }`}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          Italic
        </button>
        {/* Heading level 2 button */}
        <button
          className={`p-2 rounded ${
            editor.isActive("heading", { level: 2 }) ? "bg-gray-200" : ""
          }`}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        >
          H2
        </button>
        {/* Bullet List button */}
        <button
          className={`p-2 rounded border border-solid border-gray-200 ${
            editor.isActive("bulletList") ? "bg-red-200" : ""
          }`}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          Bullet List
        </button>
        {/* Ordered List button */}
        <button
          className={`p-2 rounded ${
            editor.isActive("orderedList") ? "bg-gray-200" : ""
          }`}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          Ordered List
        </button>
      </div>
      <EditorContent editor={editor} className="prose" />
    </div>
  );
};

export default PostEditor;
