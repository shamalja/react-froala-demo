import { useMemo } from "react";
import FroalaEditorComponent from "react-froala-wysiwyg";

// Import Froala plugins (required)
import "froala-editor/js/plugins.pkgd.min.js";

// Fix for Vite (important)
const EditorComponent =
  FroalaEditorComponent?.default || FroalaEditorComponent;

export default function Editor({ value, onChange }) {
  const config = useMemo(() => {
    return {
      placeholderText: "Start typing...",
      charCounterCount: true,
      toolbarButtons: [
        "bold",
        "italic",
        "underline",
        "|",
        "insertLink",
        "insertImage",
        "|",
        "undo",
        "redo"
      ]
    };
  }, []);

  return (
    <EditorComponent
      tag="textarea"
      model={value}
      onModelChange={onChange}
      config={config}
    />
  );
}