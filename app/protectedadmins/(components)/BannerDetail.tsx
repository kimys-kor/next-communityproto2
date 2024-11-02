import React, { useState } from "react";
import { Banner } from "@/app/types";

type BannerDetailProps = {
  banner: Banner;
  onBack: () => void;
};

function BannerDetail({ banner, onBack }: BannerDetailProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    partnerName: banner.partnerName,
    partnerUrl: banner.partnerUrl,
    clickNum: banner.clickNum,
  });
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(
    banner.thumbNail
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImage(file);
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setFormData({
      partnerName: banner.partnerName,
      partnerUrl: banner.partnerUrl,
      clickNum: banner.clickNum,
    });
    setImage(null);
    setImagePreview(banner.thumbNail);
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        id: banner.id,
        ...formData,
      };

      const formDataObj = new FormData();
      formDataObj.append("id", payload.id.toString());
      formDataObj.append("partnerName", payload.partnerName);
      formDataObj.append("partnerUrl", payload.partnerUrl);
      formDataObj.append("clickNum", payload.clickNum.toString());

      if (image) {
        formDataObj.append("thumbNail", image);
      }

      const response = await fetch("/api/admin/updatebanner", {
        method: "POST",
        body: formDataObj,
      });

      if (response.ok) {
        alert("배너 정보가 성공적으로 업데이트되었습니다.");
        onBack();
      } else {
        alert("업데이트 중 오류가 발생했습니다.");
      }
    } catch (error) {
      console.error("Error updating banner information:", error);
    }
  };

  return (
    <div className="p-4 bg-white rounded-md border border-gray-300 shadow-sm max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        배너 상세 정보
      </h2>
      <div className="space-y-3 text-gray-700">
        <div className="flex items-center justify-between">
          <p>
            <strong>ID:</strong> {banner.id}
          </p>
          <button
            onClick={handleEditClick}
            className="px-3 py-1 text-sm bg-indigo-600 text-white rounded-md"
          >
            정보 수정
          </button>
        </div>

        {isEditing ? (
          <>
            <div>
              <label className="block font-medium mb-1 text-indigo-700">
                파트너 이름
              </label>
              <input
                type="text"
                name="partnerName"
                value={formData.partnerName}
                onChange={handleInputChange}
                className="w-full p-2 border border-green-300 rounded bg-green-50"
              />
            </div>
            <div>
              <label className="block font-medium mb-1 text-indigo-700">
                파트너 URL
              </label>
              <input
                type="text"
                name="partnerUrl"
                value={formData.partnerUrl}
                onChange={handleInputChange}
                className="w-full p-2 border border-green-300 rounded bg-green-50"
              />
            </div>
            <div>
              <label className="block font-medium mb-1 text-indigo-700">
                클릭 수
              </label>
              <input
                type="number"
                name="clickNum"
                value={formData.clickNum}
                onChange={handleInputChange}
                className="w-full p-2 border border-green-300 rounded bg-green-50"
              />
            </div>
            <div>
              <label className="block font-medium mb-1 text-indigo-700">
                배너 이미지
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full p-2 border border-green-300 rounded bg-green-50"
              />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Banner Preview"
                  className="mt-2 w-full h-auto rounded"
                />
              )}
            </div>
            <div className="mt-4 flex space-x-2">
              <button
                onClick={handleCancelClick}
                className="w-full px-4 py-2 bg-gray-500 text-white rounded-md"
              >
                취소
              </button>
              <button
                onClick={handleSubmit}
                className="w-full px-4 py-2 bg-green-600 text-white rounded-md"
              >
                저장
              </button>
            </div>
          </>
        ) : (
          <>
            <p>
              <strong className="text-indigo-700">파트너 이름:</strong>{" "}
              {banner.partnerName}
            </p>
            <p>
              <strong className="text-indigo-700">파트너 URL:</strong>{" "}
              <a
                href={banner.partnerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {banner.partnerUrl}
              </a>
            </p>
            <p>
              <strong className="text-indigo-700">클릭 수:</strong>{" "}
              {banner.clickNum}
            </p>
            <p>
              <strong className="text-indigo-700">배너 이미지:</strong>
            </p>
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Banner Preview"
                className="mt-2 w-full h-auto rounded"
              />
            )}
          </>
        )}
      </div>
      <button
        onClick={onBack}
        className="mt-6 w-full px-4 py-2 bg-gray-600 text-white rounded-md"
      >
        목록으로 돌아가기
      </button>
    </div>
  );
}

export default BannerDetail;
