const MODES = [
  { key: "summarize", label: "Summarize" },
  { key: "rewrite", label: "Rewrite" },
  { key: "translate", label: "Translate" },
];

export default function ModeButtons({ mode, setMode }) {
  return (
    <div className="flex flex-wrap gap-2">
      {MODES.map((item) => (
        <button key={item.key} onClick={() => setMode(item.key)} className={`rounded-full px-4 py-2 text-sm font-medium transition ${mode === item.key ? "bg-red-700 text-white" : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"}`}>
          {item.label}
        </button>
      ))}
    </div>
  );
}
