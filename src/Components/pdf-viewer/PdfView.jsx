import React, { useEffect, useRef, useState } from "react";
import { pdfjs } from "react-pdf";
import file from "./newsPdf.pdf";
import CropImage from "../CropImage/CropImage";
import TopHeader from "../top-header/TopHeader";
import Footer from "../footer/Footer";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewerComponent = ({ content = file }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const renderPdf = async () => {
      try {
        const pdfDocument = await pdfjs.getDocument(content || "").promise;
        const page = await pdfDocument.getPage(1); // Render the first page

        // Ensure previous rendering operations are completed or cancelled
        const canvas = canvasRef.current;
        if (!canvas) return; // Add null check
        const context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Render the page on the canvas
        const viewport = page.getViewport({ scale: 1.5 });
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        await page.render({ canvasContext: context, viewport }).promise;
      } catch (error) {
        console.error("Error rendering PDF:", error);
      }
    };

    renderPdf();

    // Cleanup function
    return () => {
      // Clear the canvas and cancel any ongoing rendering tasks
      const canvas = canvasRef.current;
      if (!canvas) return; // Add null check
      const context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [content]);

  return (
    <>
      <TopHeader />
      <div className="wrapper">
        <div className="epaper-inner">
          <div className="news-header">PDF</div>
        </div>
        <div className="line-orange"></div>
        <canvas style={{ width: "100%" }} ref={canvasRef} />
      </div>
      <CropImage image={file} />
      <Footer />
    </>
  );
};

export default PDFViewerComponent;
