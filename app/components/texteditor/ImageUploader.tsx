import React, { useState, useRef, ChangeEvent, DragEvent } from "react";
import axios from "axios";
import Image from "next/image";

interface ImageUploaderProps {
  onClose: () => void;
  onUpload: (imageUrls: string[]) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onClose, onUpload }) => {
  const [images, setImages] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleImageRemove = (index: number) => {
    setImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages.splice(index, 1);
      return updatedImages;
    });
  };

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      setImages((prevImages) => [...prevImages, ...files]);
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleUpload = async () => {
    if (images.length === 0) return;

    const formData = new FormData();
    images.forEach((file) => formData.append("file", file, file.name));

    try {
      const res = await axios.post("/api/main/image-upload/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      onUpload(res.data);
      onClose(); // Close the modal after upload
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="modal-container">
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <div className="container py-4 mx-auto">
          <div
            className="p-4 text-center border-2 border-gray-400 border-dashed"
            onDragOver={(event) => event.preventDefault()}
            onDrop={handleDrop}
          >
            <p className="mb-4 text-lg">사진을 드래그 하세요</p>
            {images.length > 0 && (
              <div className="flex flex-wrap">
                {images.map((image, index) => (
                  <div key={index} className="w-1/4 p-2">
                    <div className="relative">
                      <Image
                        src={URL.createObjectURL(image)}
                        width={200}
                        height={190}
                        alt={`Image ${index + 1}`}
                        className="object-cover w-full h-32"
                      />
                      <button
                        className="absolute top-0 right-0 p-2 text-white bg-red-500 rounded-full"
                        onClick={() => handleImageRemove(index)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="mt-4">
            <input
              type="file"
              accept="image/*"
              multiple
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileSelect}
            />
            <button
              className="p-2 text-xs text-white bg-purple-500 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75"
              onClick={handleButtonClick}
            >
              이미지 첨부
            </button>
            <button
              className="ml-2 p-2 text-xs text-white bg-green-500 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
              onClick={handleUpload}
            >
              업로드
            </button>
            <button
              className="ml-2 p-2 text-xs text-white bg-gray-500 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
              onClick={onClose}
            >
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
