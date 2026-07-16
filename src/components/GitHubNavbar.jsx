import { useEffect, useState } from "react";

export default function ProjectNav({ folder, activeFile, onSelect }) {
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
      <h3 className="mb-3 text-lg font-bold text-red-600 dark:text-cyan-400">
        Projects
      </h3>

      {files.map(file => (
        <button
          key={file.name}
          onClick={() => onSelect(file)}
          className={`block w-full text-left px-3 py-2 rounded-md transition-colors duration-200
            ${
              activeFile === file.name
                ? "bg-red-600 dark:bg-cyan-600 text-white shadow-md"
                : "text-red-600 dark:text-cyan-300 hover:text-red-500 dark:hover:text-cyan-200 hover:bg-zinc-200 dark:hover:bg-zinc-700"
            }
          `}
        >
          {file.name.replace(".md", "")}
        </button>
      ))}
    </div>
  );
}
