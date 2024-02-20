import { Download } from "../../Download";
import "./ResumeDownload.css";

export function ResumeDownload() {
  return (
    <Download
      href="/public/files/resume-joe-maalouf.pdf"
      fileName="resume-joe-maalouf.pdf"
      displayName="Download Resume PDF"
      type="application/x-pdf"
    />
  );
}
