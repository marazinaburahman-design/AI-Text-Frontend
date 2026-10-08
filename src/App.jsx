import { useState } from "react";
import Header from "./components/Header";
import ModeButtons from "./components/ModeButtons";
import TextInput from "./components/TextInput";
import TextOutput from "./components/TextOutput";
import { transformText } from "./services/api";

const SAMPLE_TEXT = `Artificial intelligence is changing how people work and learn. Many companies now use AI tools to write, translate, and summarize content. These tools save time, but the results still need a human to check them. Students can use them to understand hard topics in simpler words. The key is to use AI as a helper, not as a replacement for thinking.`;

export default function App() {
  const [mode, setMode] = useState("summarize");
  const [tone, setTone] = useState("Simple");
  const [target, setTarget] = useState("Tamil");
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState("Copy");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleCopy() {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied("Copied!");
    setTimeout(() => setCopied("Copy"), 1500);
  }

  async function handleTransform() {
    if (!text.trim() || loading) return;

    setLoading(true);
    setError("");
    setOutput("");

    try {
      const data = await transformText({
        mode,
        tone,
        target,
        text,
      });

      
      setOutput(data.output || "No output was returned.");
    } catch (err) {
      const message =
        err.response?.data?.message ||
        "Could not connect to the backend. Make sure the backend is running.";
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <Header />
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <ModeButtons mode={mode} setMode={setMode} />
            <div className="flex gap-2">
              <button onClick={() => setText(SAMPLE_TEXT)} className="rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-200 hover:bg-zinc-800">Load sample</button>
              <button onClick={() => { setText(""); setOutput(""); }} className="rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-200 hover:bg-zinc-800">Clear</button>
            </div>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <TextInput mode={mode} tone={tone} setTone={setTone} target={target} setTarget={setTarget} text={text} setText={setText} onTransform={handleTransform} loading={loading} />
            <TextOutput output={output} copied={copied} onCopy={handleCopy} />
          </div>
          {error && <p className="mt-4 rounded-xl border border-red-900/60 bg-red-950/30 p-3 text-sm text-red-300">{error}</p>}
        </div>
      </div>
    </main>
  );
}
