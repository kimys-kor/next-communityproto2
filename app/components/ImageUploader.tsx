import React, { useState, useRef } from "react";

const ImageUploader: React.FC = () => {
  const [images, setImages] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
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

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
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

  return (
    <div className="container py-4 mx-auto">
      <div
        className="p-4 text-center border-2 border-gray-400 border-dashed"
        onDragOver={(event) => event.preventDefault()}
        onDrop={handleDrop}
      >
        <p className="mb-4 text-lg ">사진을 드래그 하세요</p>
        {images.length > 0 && (
          <div className="flex flex-wrap">
            {images.map((image, index) => (
              <div key={index} className="w-1/4 p-2">
                <div className="relative">
                  <img
                    src={URL.createObjectURL(image)}
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
      <div className="mt-4 ">
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
      </div>
    </div>
  );
};

export default ImageUploader;
