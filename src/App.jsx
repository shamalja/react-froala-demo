import { useState } from "react";
import Editor from "./components/Editor";

export default function App() {
  const [content, setContent] = useState("");

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>React WYSIWYG Editor Demo</h1>

      <Editor value={content} onChange={setContent} />

      <h2>Preview</h2>

      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          marginTop: "10px"
        }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
