import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface EditorProps {
  value: string;
  setValue: any;
}

const TextEditor: React.FC<EditorProps> = ({ value, setValue }) => {
  return (
    <ReactQuill
      theme="bubble"
      className="w-full min-h-[400px] my-2"
      value={value}
      onChange={setValue}
      placeholder="Tell your story . . ."
    />
  );
};

export default TextEditor;
