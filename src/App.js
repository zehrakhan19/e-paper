import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EPaper from "./pages/EPaper";
import PDFViewerComponent from "./Components/pdf-viewer/PdfView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EPaper />} />
        <Route path="/pdf-full-view" element={<PDFViewerComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
