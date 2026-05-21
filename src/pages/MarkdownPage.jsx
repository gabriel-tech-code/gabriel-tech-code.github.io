import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function MarkdownPage() {
  const { folder, file } = useParams();
  const [content, setContent] = useState("");

  const url = `https://raw.githubusercontent.com/gabriel-tech-code/content/main/${folder}/${file}.md`;

  useEffect(() => {
    fetch(url)
      .then(res => res.text())
      .then(text => setContent(text))
      .catch(() => setContent("# Error\nCould not load content."));
  }, [url]);

  return (
    <main className="max-w-4xl px-6 py-10 mx-auto prose dark:prose-invert">
      <ReactMarkdown>{content}</ReactMarkdown>
    </main>
  );
}
