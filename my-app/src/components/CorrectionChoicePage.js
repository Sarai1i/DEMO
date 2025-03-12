import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; // ✅ استيراد التنسيقات

const CorrectionChoicePage = () => {
  const navigate = useNavigate();

  const handleAutoCorrection = () => {
    navigate("/processing"); // توجيه إلى صفحة "جاري التصحيح"
  };

  return (
    <div className="choice-page">
      <div className="choice-box-container">
        <h2 className="choice-box-title">كيف تود تصحيح النص؟</h2>
        <p className="choice-box-description">
          يمكنك اختيار التصحيح اليدوي، أو السماح للنماذج اللغوية الذكية بالتصحيح التلقائي.
        </p>
        <button className="choice-btn" onClick={handleAutoCorrection}>
          تصحيح تلقائي
        </button>
        <button className="choice-btn" onClick={() => navigate("/review")}>
          تصحيح يدوي
        </button>
      </div>
    </div>
  );
};

export default CorrectionChoicePage;
