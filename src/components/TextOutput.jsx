export default function TextOutput({ output, copied, onCopy }) {
  return (
    <div className="space-y-3">
      <label className="text-sm text-zinc-300">Output</label>
      <div className="h-64 overflow-auto whitespace-pre-wrap rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4 text-sm text-zinc-100">
        {output || (
          <span className="text-zinc-500">
            Your transformed text will appear here.
          </span>
        )}
      </div>
      <button
        onClick={onCopy}
        className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-200 hover:bg-zinc-800"
      >
        {copied}
      </button>
      <p className="text-xs text-zinc-500">
        Tip: Use “Load sample” for quick demos.
      </p>
    </div>
  );
}
