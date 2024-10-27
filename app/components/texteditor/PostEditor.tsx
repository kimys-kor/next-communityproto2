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

interface TipTapProps {
  value: string;
  onChange: (content: string) => void;
}

const Tiptap = ({ value, onChange }: TipTapProps) => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose-sm lg:prose-lg xl:prose-2xl shadow appearance-none min-w-full min-h-[500px] border rounded w-full py-2 px-3 bg-white text-black text-sm mt-0 md:mt-3 leading-tight focus:outline-none focus:shadow-outline",
      },
      handleDrop(view, event, slice, moved) {
        const dataTransfer = event.dataTransfer;
        // Ensure dataTransfer is not null and contains files
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
    },
    extensions: [
      StarterKit.configure({
        history: false,
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
        heading: {
          levels: [1, 2, 3],
        },
      }),
      TextStyle,
      FontSize,
      TextAlign.configure({
        types: ["heading", "paragraph", "image"],
        defaultAlignment: "left",
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
        HTMLAttributes: {
          target: "_blank",
          rel: "noopener noreferrer",
          class: "text-blue",
        },
      }),
      ImageExtension,
      ImageResize,
      Color,
    ],
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
      // Check if the URL starts with 'http://', 'https://', or is a relative path
      let finalUrl = url;

      // If the user entered a relative URL, treat it as is (it will use the current domain)
      // If the user didn't specify a protocol, prepend 'http://'
      if (!url.startsWith("http://") && !url.startsWith("https://")) {
        finalUrl = "http://" + url;
      }

      // Set the link with target="_blank" to open in a new window
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: finalUrl, target: "_blank" })
        .run();

      setLinkUrl(""); // Reset the link URL state
    }
  }, [editor, linkUrl]);

  const removeLink = () => {
    editor.chain().focus().unsetLink().run();
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
      {/* Image button (multiple image functionality) */}
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
      {/* Text color picker */}
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
        <option value="24px">24px</option>
        <option value="32px">32px</option>
        <option value="38px">38px</option>
        <option value="42px">42px</option>
        <option value="56px">56px</option>
      </select>
      <button className="p-2 rounded" onClick={addLink} title="Add Link">
        <FontAwesomeIcon icon={faLink} />
      </button>
      <button className="p-2 rounded" onClick={removeLink} title="Remove Link">
        <FontAwesomeIcon icon={faLink} style={{ transform: "rotate(45deg)" }} />
      </button>{" "}
    </div>
  );
};

export default Tiptap;
