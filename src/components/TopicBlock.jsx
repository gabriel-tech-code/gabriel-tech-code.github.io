export default function TopicBlock({ title, children, center = false }) {
  return (
    <div className={`space-y-2 ${center ? "text-center" : ""}`}>
      <h2
        className={`
          text-xl font-bold underline
          text-red-600 dark:text-cyan-400
          ${center ? "mx-auto" : ""}
        `}
      >
        {title}
      </h2>

      <div
        className={`
          prose dark:prose-invert max-w-none
          ${center ? "mx-auto prose-p:text-center prose-ul:text-center prose-ol:text-center" : ""}
        `}
      >
        {children}
      </div>
    </div>
  );
}
