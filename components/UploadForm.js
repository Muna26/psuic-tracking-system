import React, { useState, useRef } from 'react';
import { useTranslation } from 'next-i18next';
import { uploadFile } from '../utils/uploadFile';

const UploadForm = () => {
  const { t } = useTranslation('common');
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setUploadError(null);
    setUploadSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;

    setIsUploading(true);
    setUploadError(null);
    setUploadSuccess(false);

    try {
      await uploadFile(selectedFile);
      setUploadSuccess(true);
      setSelectedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch (error) {
      setUploadError(error.message);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div
        className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-primary-500 hover:bg-blue-50 transition-colors cursor-pointer group"
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          type="file"
          accept="image/*, video/*"
          onChange={handleFileChange}
          className="hidden"
          ref={fileInputRef}
        />
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
            {selectedFile ? '📁' : '📸'}
          </div>
          <div className="text-gray-600 font-medium">
            {selectedFile ? selectedFile.name : t('chooseFile')}
          </div>
          {!selectedFile && <div className="text-xs text-gray-400">Supports JPG, PNG, MP4</div>}
        </div>
      </div>

      <button
        type="submit"
        disabled={isUploading || !selectedFile}
        className={`w-full py-4 rounded-xl font-bold text-white shadow-lg transition-all transform hover:-translate-y-1 ${isUploading || !selectedFile
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-gradient-to-r from-green-500 to-green-600 hover:shadow-green-500/30'
          }`}
      >
        {isUploading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {t('uploading')}
          </span>
        ) : t('upload')}
      </button>

      {uploadError && (
        <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
          {uploadError}
        </div>
      )}

      {uploadSuccess && (
        <div className="p-4 bg-green-50 text-green-600 rounded-xl text-sm font-medium flex items-center gap-2">
          <span>✅</span> {t('uploadSuccess')}
        </div>
      )}
    </form>
  );
};

export default UploadForm;