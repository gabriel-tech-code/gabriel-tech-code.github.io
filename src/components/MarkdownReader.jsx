import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function MarkdownReader({ url }) {
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error("Failed to load markdown");
        return res.text();
      })
      .then(text => {
        setContent(text);
        setError(false);
      })
      .catch(() => {
        setError(true);
        setContent("# Error\nCould not load content.");
      });
  }, [url]);

  return (
    <div className="max-w-full prose dark:prose-invert">
      {error ? (
        <ReactMarkdown>{content}</ReactMarkdown>
      ) : (
        <ReactMarkdown>{content}</ReactMarkdown>
      )}
    </div>
  );
}
