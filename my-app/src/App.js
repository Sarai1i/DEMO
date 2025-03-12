import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FileUpload from "./components/FileUpload";
import Navbar from "./components/Navbar";  // استيراد المكون
import LoadingPage from "./components/LoadingPage";
import ReviewPage from "./components/ReviewPage"; // ✅ تأكد من استيراد الصفحة
import DownloadPage from "./components/DownloadPage";
import CorrectionChoicePage from "./components/CorrectionChoicePage"; // ✅ استيراد الصفحة الجديدة
import ProcessingPage from "./components/ProcessingPage"; // ✅ استيراد الصفحة الجديدة

import "./App.css";

function App() {
  return (
    <Router>
        <Navbar /> {/* ✅ إضافة شريط التنقل هنا */}
      <Routes>
        <Route path="/" element={<FileUpload />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/correction-choice" element={<CorrectionChoicePage />} /> {/* ✅ مسار جديد */}
        <Route path="/processing" element={<ProcessingPage />} /> {/* ✅ إضافة المسار الجديد */}
        <Route path="/review" element={<ReviewPage />} /> {/* ✅ تأكد من أن الصفحة موجودة */}
        <Route path="/download" element={<DownloadPage />} /> {/* ✅ صفحة التنزيل */}
      </Routes>
    </Router>
  );
}

export default App;
