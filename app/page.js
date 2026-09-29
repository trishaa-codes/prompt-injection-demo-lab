 "use client";

import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState(null);

  function analyzePrompt() {
    const suspiciousPatterns = [
      "ignore previous instructions",
      "ignore all previous instructions",
      "system prompt",
      "reveal your instructions",
      "forget your instructions",
      "jailbreak",
    ];

    const lowerPrompt = prompt.toLowerCase();

    const detected = suspiciousPatterns.filter((pattern) =>
      lowerPrompt.includes(pattern)
    );

    if (detected.length > 0) {
      setResult({
        status: "Potential Prompt Injection Detected",
        risk: "High",
        patterns: detected,
      });
    } else {
      setResult({
        status: "No obvious injection detected",
        risk: "Low",
        patterns: [],
      });
    }
  }

  return (
    <main style={{ maxWidth: "900px", margin: "50px auto", padding: "20px" }}>
      <h1>Prompt Injection Demo Lab</h1>

      <p>
        Test prompts and identify potentially malicious prompt-injection
        patterns.
      </p>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter a prompt to analyze..."
        rows={8}
        style={{ width: "100%", padding: "15px", marginTop: "20px" }}
      />

      <button
        onClick={analyzePrompt}
        style={{ marginTop: "15px", padding: "12px 24px" }}
      >
        Analyze Prompt
      </button>

      {result && (
        <div style={{ marginTop: "30px" }}>
          <h2>{result.status}</h2>
          <p>Risk Level: {result.risk}</p>

          {result.patterns.length > 0 && (
            <>
              <h3>Detected Patterns</h3>
              <ul>
                {result.patterns.map((pattern) => (
                  <li key={pattern}>{pattern}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </main>
  );
}