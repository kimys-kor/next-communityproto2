"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextStyle from "@tiptap/extension-text-style";
import { FontSize } from "./FontSize";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import ImageExtension from "@tiptap/extension-image";
import ImageResize from "tiptap-extension-resize-image";
import Color from "@tiptap/extension-color";
import HardBreak from "@tiptap/extension-hard-break";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faListOl,
  faListUl,
  faHeading,
  faImage,
  faAlignLeft,
  faAlignCenter,
  faAlignRight,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { useCallback, useRef, useState } from "react";
import toast from "react-hot-toast";

// Custom link extension to ensure links open in new tab
const CustomLink = Link.extend({
  addAttributes() {
    return {
      href: { default: null },
      target: { default: "_blank" },
      rel: { default: "noopener noreferrer" },
    };
  },
});

interface TipTapProps {
  value: string;
  onChange: (content: string) => void;
}

const Tiptap = ({ value, onChange }: TipTapProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      FontSize,
      TextAlign,
      CustomLink,
      ImageExtension,
      ImageResize,
      Color,
      HardBreak,
    ],
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose-sm lg:prose-lg xl:prose-2xl shadow appearance-none min-w-full min-h-[500px] border rounded w-full py-2 px-3 bg-white text-black text-sm mt-0 md:mt-3 leading-tight focus:outline-none focus:shadow-outline",
      },
      handleDrop(view, event, slice, moved) {
        const dataTransfer = event.dataTransfer;
        if (
          dataTransfer &&
          dataTransfer.files &&
          dataTransfer.files.length > 0
        ) {
          event.preventDefault();
          handleMultipleImagesUpload(dataTransfer.files, editor);
        }
        return false;
      },
      handleDOMEvents: {
        click: (view, event) => {
          const target = event.target as HTMLAnchorElement;
          if (target.tagName === "A" && target.href) {
            window.open(target.href, "_blank");
            event.preventDefault();
          }
        },
      },
      handleKeyDown(view, event) {
        if (event.key === "Enter" && !event.shiftKey) {
          event.preventDefault();
          editor?.chain().focus().setHardBreak().run();
          return true;
        }
        return false;
      },
    },
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    immediatelyRender: false,
  });

  if (!editor) {
    return null;
  }

  const uploadImagesToServer = async (files: File[]): Promise<string[]> => {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });

    const response = await fetch("/api/images", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      toast.error("로그인을 해주세요");
      throw new Error("Failed to upload images.");
    }

    const result = await response.json();
    return result.data;
  };

  const handleMultipleImagesUpload = async (
    files: FileList,
    editorInstance: any
  ) => {
    const uploadedImageUrls = await uploadImagesToServer(Array.from(files));

    uploadedImageUrls.forEach((url: string) => {
      editorInstance.chain().focus().setImage({ src: url }).run();
    });
  };

  return (
    <div className="flex flex-col border border-solid border-gray-200">
      <MenuBar editor={editor} uploadImagesToServer={uploadImagesToServer} />
      <EditorContent className="min-h-[500px]" editor={editor} />
    </div>
  );
};

const MenuBar = ({ editor, uploadImagesToServer }: any) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [linkUrl, setLinkUrl] = useState<string>("");

  const handleImageChange = async (e: any) => {
    const files = Array.from(e.target.files) as File[];
    const uploadedImageUrls = await uploadImagesToServer(files);

    uploadedImageUrls.forEach((url: string) => {
      editor.chain().focus().setImage({ src: url }).run();
    });
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

  const addLink = useCallback(() => {
    const url = prompt("Enter the URL", linkUrl);

    if (url) {
      let finalUrl = url;
      if (!url.startsWith("http://") && !url.startsWith("https://")) {
        finalUrl = "http://" + url;
      }

      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({
          href: finalUrl,
          target: "_blank",
          rel: "noopener noreferrer",
        })
        .run();

      setLinkUrl("");
    }
  }, [editor, linkUrl]);

  const removeLink = () => {
    editor.chain().focus().unsetLink().run();
  };

  if (!editor) return null;

  return (
    <div className="flex items-center gap-2 bg-gray-100 p-2 w-full border-b border-solid border-gray-200">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-2 rounded ${editor.isActive("bold") ? "bg-gray-300" : ""}`}
        title="Bold"
      >
        <FontAwesomeIcon icon={faBold} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`p-2 rounded ${editor.isActive("heading", { level: 2 }) ? "bg-gray-300" : ""}`}
        title="Heading 2"
      >
        <FontAwesomeIcon icon={faHeading} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-2 rounded ${editor.isActive("bulletList") ? "bg-gray-300" : ""}`}
        title="Bullet List"
      >
        <FontAwesomeIcon icon={faListUl} />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`p-2 rounded ${editor.isActive("orderedList") ? "bg-gray-300" : ""}`}
        title="Ordered List"
      >
        <FontAwesomeIcon icon={faListOl} />
      </button>

      <button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={`p-2 rounded ${editor.isActive({ textAlign: "left" }) ? "bg-gray-300" : ""}`}
        title="Align left"
      >
        <FontAwesomeIcon icon={faAlignLeft} />
      </button>

      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={`p-2 rounded ${editor.isActive({ textAlign: "center" }) ? "bg-gray-300" : ""}`}
        title="Align center"
      >
        <FontAwesomeIcon icon={faAlignCenter} />
      </button>

      <button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={`p-2 rounded ${editor.isActive({ textAlign: "right" }) ? "bg-gray-300" : ""}`}
        title="Align right"
      >
        <FontAwesomeIcon icon={faAlignRight} />
      </button>

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
        multiple
      />

      <input
        type="color"
        onInput={handleTextColorChange}
        className="ml-2 p-1 border border-gray-400 rounded"
        title="Text Color"
      />

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

      <button className="p-2 rounded" onClick={addLink} title="Add Link">
        <FontAwesomeIcon icon={faLink} />
      </button>

      <button className="p-2 rounded" onClick={removeLink} title="Remove Link">
        <FontAwesomeIcon icon={faLink} style={{ transform: "rotate(45deg)" }} />
      </button>
    </div>
  );
};

export default Tiptap;
