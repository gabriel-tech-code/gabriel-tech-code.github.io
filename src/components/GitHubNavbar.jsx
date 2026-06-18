import { useEffect, useState } from "react";

export default function GHNavbar({ folder, activeFile, onSelect }) {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/repos/gabriel-tech-code/content/contents/${folder}`)
      .then(res => res.json())
      .then(data => {
        const markdownFiles = data.filter(item => item.name.endsWith(".md"));
        setFiles(markdownFiles);
      })
      .catch(err => console.error(err));
  }, [folder]);

  return (
    <div className="w-48 p-4 space-y-2 border-r border-zinc-700">
      <h3 className="mb-3 text-lg font-bold">Projects</h3>

      {files.map(file => (
        <button
          key={file.name}
          onClick={() => onSelect(file)}
          className={`block w-full text-left px-2 py-1 rounded 
            ${activeFile === file.name 
              ? "bg-cyan-600 text-white" 
              : "hover:bg-zinc-700"
            }`}
        >
          {file.name.replace(".md", "")}
        </button>
      ))}
    </div>
  );
}
