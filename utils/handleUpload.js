"use client";

import { useState } from "react";
import { useTranslation } from "next-i18next";
import { uploadFile } from "@/utils/uploadFile";

const UploadForm = () => {
  const { t } = useTranslation("common");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    setUploadError(null);
    setUploadSuccess(false);

    try {
      await uploadFile(selectedFile);
      setUploadSuccess(true);
    } catch (error) {
      setUploadError(error.message);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="file"
        accept="image/, video/"
        onChange={handleFileChange}
        className="border border-gray-300 rounded-md p-2"
      />
      {selectedFile && (
        <div className="text-gray-600">
          {t("selectedFile")}: {selectedFile.name}
        </div>
      )}
      <button
        type="submit"
        disabled={isUploading}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
      >
        {isUploading ? t("uploading") : t("upload")}
      </button>
      {uploadError && (
        <div className="text-red-500">{uploadError}</div>
      )}
      {uploadSuccess && (
        <div className="text-green-500">{t("uploadSuccess")}</div>
      )}
    </form>
  );
};

export default UploadForm;