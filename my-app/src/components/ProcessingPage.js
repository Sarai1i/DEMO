import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; // ✅ استيراد التنسيقات

const ProcessingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // محاكاة وقت التصحيح (يمكنك استبداله بعملية حقيقية)
    const timer = setTimeout(() => {
      navigate("/download"); // توجيه المستخدم إلى صفحة التحميل بعد الانتهاء
    }, 5000); // مدة 5 ثواني (يمكنك تغييرها حسب مدة التصحيح الفعلية)

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="processing-container">
      <div className="processing-box">
        <h2>جاري التصحيح...</h2>
        <p>يرجى الانتظار حتى يتم تصحيح النص.</p>
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default ProcessingPage;
