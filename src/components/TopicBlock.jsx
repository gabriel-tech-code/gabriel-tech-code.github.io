export default function TopicBlock({ title, children }) {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-bold text-red-600 dark:text-cyan-400">
        {title}
      </h2>

      <p className="text-zinc-800 dark:text-zinc-300">
        {children}
      </p>
    </div>
  );
}