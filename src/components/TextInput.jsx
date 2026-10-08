export default function TextInput({
  mode,
  tone,
  setTone,
  target,
  setTarget,
  text,
  setText,
  onTransform,
  loading,
}) {
  return (
    <div className="space-y-3">
      <label className="text-sm text-zinc-300">Input</label>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your text here…"
        className="h-64 w-full resize-none rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4 text-sm text-zinc-100 outline-none focus:border-zinc-500"
      />
      {mode === "rewrite" && (
        <div className="flex items-center gap-3">
          <span className="text-sm text-zinc-300">Tone</span>
          <select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="rounded-xl border border-zinc-800 bg-zinc-950/60 px-3 py-2 text-sm text-zinc-100"
          >
            <option>Simple</option>
            <option>Professional</option>
            <option>Friendly</option>
            <option>Funny</option>
          </select>
        </div>
      )}
      {mode === "translate" && (
        <div className="flex items-center gap-3">
          <span className="text-sm text-zinc-300">Target</span>
          <select
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            className="rounded-xl border border-zinc-800 bg-zinc-950/60 px-3 py-2 text-sm text-zinc-100"
          >
            <option>Tamil</option>
            <option>English</option>
          </select>
        </div>
      )}
      <button
        onClick={onTransform}
        disabled={loading || !text.trim()}
        className="w-full rounded-2xl bg-emerald-400 px-4 py-3 text-sm font-semibold text-zinc-950 hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Transforming…" : "Transform"}
      </button>
    </div>
  );
}
