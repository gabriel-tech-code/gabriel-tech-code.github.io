
export default function BodyGridGray({ rows = 1, cols = 1, items = [] }) {
  return (
    <div
      className={`grid gap-6 p-6 bg-zinc-300  dark:bg-zinc-800 rounded-lg`}
      style={{
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, auto)`
      }}
    >
      {items.map((item, i) => (
        <div
          key={i}
          className="p-4 rounded-lg shadow-sm "
        >
          {item}
        </div>
      ))}
    </div>
  );
}