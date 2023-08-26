import { Worker } from "@react-pdf-viewer/core";
import { ReactPDFViewer } from "./Viewer";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

function App() {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <ReactPDFViewer />
    </Worker>
  );
}

export default App;
