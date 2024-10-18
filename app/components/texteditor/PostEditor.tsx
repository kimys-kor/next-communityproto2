"use client";
import { useState } from "react";

interface PostEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const PostEditor: React.FC<PostEditorProps> = ({ value, onChange }) => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [imagePosition, setImagePosition] = useState<"top" | "bottom">(
    "bottom"
  );

  // Open the image uploader in a new window
  const handleImageUploadClick = () => {
    const newWindow = window.open(
      "/image-uploader", // Path to your ImageUploader component
      "_blank",
      "width=600,height=400"
    );

    // Listen for image URLs from the ImageUploader via postMessage
    newWindow?.addEventListener("message", (event) => {
      if (event.origin === window.location.origin && event.data.imageUrls) {
        setSelectedImages(event.data.imageUrls);
      }
    });
  };

  return (
    <div className="flex flex-col gap-4 p-4 border border-gray-200 rounded-lg bg-white">
      {/* Textarea for post content */}
      <textarea
        className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="게시글 내용을 작성하세요..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      {/* Image upload button */}
      <div
        onClick={handleImageUploadClick}
        className="cursor-pointer self-start px-4 py-2 font-semibold text-white bg-blue hover:bg-blue rounded-lg"
      >
        이미지 업로드
      </div>

      {/* Display selected images */}
      {selectedImages.length > 0 && (
        <div className="flex flex-wrap gap-4">
          {selectedImages.map((url, index) => (
            <div key={index} className="relative">
              <img
                src={"localhost:8080/" + url}
                alt={`미리보기 ${index}`}
                className="w-32 h-32 object-cover border border-gray-300 rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      )}

      {/* Buttons to choose image position */}
      <div className="flex gap-4">
        <div
          className={`cursor-pointer px-4 py-2 font-semibold text-white rounded-lg bg-red-500`}
          onClick={() => setImagePosition("top")}
        >
          상단 위치
        </div>
        <div
          className={`cursor-pointer px-4 py-2 font-semibold text-white rounded-lg bg-pink-500`}
          onClick={() => setImagePosition("bottom")}
        >
          하단 삽입
        </div>
      </div>
    </div>
  );
};

export default PostEditor;
