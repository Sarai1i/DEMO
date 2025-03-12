import React from "react";
import "../App.css"; 
import API_BASE_URL from "../config"; // ✅ استيراد API_BASE_URL

const DownloadFile = () => {
  const downloadCorrectedFile = () => {
    window.location.href = `${API_BASE_URL}/download_corrected`; 
  };

  return (
    <div className="download-container">
      <div className="download-box">
        <h2 className="download-title">تم الانتهاء من التصحيح</h2>
        <p className="download-description">يمكنك الآن تحميل الملف المصحح بالضغط على الزر أدناه.</p>

        <button className="download-btn" onClick={downloadCorrectedFile}>
          تنزيل الملف المصحح
        </button>
      </div>
    </div>
  );
};

export default DownloadFile;
