export default function BodyGrid({ rows = 1, cols = 1, items = [] }) {
  return (
    <div
      className={`grid gap-6 p-6 border-2 border-red-500 rounded-lg
      dark:border-cyan-400`}
      style={{
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, auto)`
      }}
    >
      {items.map((item, i) => (
        <div
          key={i}
          className="p-4 border rounded-md border-zinc-400 dark:border-zinc-700"
        >
          {item}
        </div>
      ))}
    </div>
  );
}