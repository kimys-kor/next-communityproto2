"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextStyle from "@tiptap/extension-text-style";
import { FontSize } from "./FontSize";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import Italic from "@tiptap/extension-italic";
import Heading from "@tiptap/extension-heading";
import TextAlign from "@tiptap/extension-text-align";
import ImageExtension from "@tiptap/extension-image";
import Color from "@tiptap/extension-color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faItalic,
  faListOl,
  faListUl,
  faHeading,
  faImage,
  faAlignLeft,
  faAlignCenter,
  faAlignRight,
} from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

interface TipTapProps {
  value: string;
  onChange: (content: string) => void;
}

const MenuBar = ({ editor }: any) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          editor.chain().focus().setImage({ src: reader.result }).run();
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  const handleTextColorChange = (e: any) => {
    editor.chain().focus().setColor(e.target.value).run();
  };

  const handleFontSizeChange = (size: string) => {
    editor.chain().focus().setFontSize(size).run();
  };

  if (!editor) return null;

  return (
    <div className="flex items-center gap-2 bg-gray-100 p-2 w-full border-b border-solid border-gray-200">
      {/* Bold button */}
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-2 rounded ${editor.isActive("bold") ? "bg-gray-300" : ""}`}
        title="Bold"
      >
        <FontAwesomeIcon icon={faBold} />
      </button>

      {/* Italic button */}
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-2 rounded ${editor.isActive("italic") ? "bg-gray-300" : ""}`}
        title="Italic"
      >
        <FontAwesomeIcon icon={faItalic} />
      </button>

      {/* Heading button */}
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`p-2 rounded ${editor.isActive("heading", { level: 2 }) ? "bg-gray-300" : ""}`}
        title="Heading 2"
      >
        <FontAwesomeIcon icon={faHeading} />
      </button>

      {/* Bullet List button */}
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-2 rounded ${editor.isActive("bulletList") ? "bg-gray-300" : ""}`}
        title="Bullet List"
      >
        <FontAwesomeIcon icon={faListUl} />
      </button>

      {/* Ordered List button */}
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`p-2 rounded ${editor.isActive("orderedList") ? "bg-gray-300" : ""}`}
        title="Ordered List"
      >
        <FontAwesomeIcon icon={faListOl} />
      </button>

      {/* Align Left button */}
      <button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={`p-2 rounded ${editor.isActive({ textAlign: "left" }) ? "bg-gray-300" : ""}`}
        title="Align left"
      >
        <FontAwesomeIcon icon={faAlignLeft} />
      </button>

      {/* Align Center button */}
      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={`p-2 rounded ${editor.isActive({ textAlign: "center" }) ? "bg-gray-300" : ""}`}
        title="Align center"
      >
        <FontAwesomeIcon icon={faAlignCenter} />
      </button>

      {/* Align Right button */}
      <button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={`p-2 rounded ${editor.isActive({ textAlign: "right" }) ? "bg-gray-300" : ""}`}
        title="Align right"
      >
        <FontAwesomeIcon icon={faAlignRight} />
      </button>

      {/* Image button (single functionality for image upload) */}
      <button
        className="p-2 rounded"
        onClick={handleIconClick}
        title="Insert Image"
      >
        <FontAwesomeIcon icon={faImage} />
      </button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageChange}
        className="hidden"
      />

      {/* Text color picker (intact as requested) */}
      <input
        type="color"
        onInput={handleTextColorChange}
        className="ml-2 p-1 border border-gray-400 rounded"
        title="Text Color"
      />

      {/* Font size options */}
      <select
        onChange={(e) => handleFontSizeChange(e.target.value)}
        className="ml-2 p-1 border border-gray-400 rounded"
        title="Font Size"
      >
        <option value="12px">12px</option>
        <option value="16px">16px</option>
        <option value="20px">20px</option>
        <option value="24px">24px</option>
        <option value="28px">28px</option>
      </select>
    </div>
  );
};

const Tiptap = ({ value, onChange }: TipTapProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Italic,
      TextStyle,
      FontSize,
      BulletList,
      OrderedList,
      Heading.configure({
        levels: [1, 2, 3],
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
        defaultAlignment: "left",
      }),
      ImageExtension,
      Color,
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "prose sm:prose-sm lg:prose-lg xl:prose-2xl shadow appearance-none min-w-full min-h-[500px] border rounded w-full py-2 px-3 bg-white text-black text-sm mt-0 md:mt-3 leading-tight focus:outline-none focus:shadow-outline",
      },
    },
  });

  return (
    <div className="flex flex-col border border-solid border-gray-200">
      <MenuBar editor={editor} />
      <EditorContent className="min-h-[500px] " editor={editor} />
    </div>
  );
};

export default Tiptap;
