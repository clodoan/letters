'use client'

import { useState } from "react";
import P5Sketch from "../components/P5Sketch";

export default function Home() {
  const [regenerateKey, setRegenerateKey] = useState(0);

  const handleGenerateLetters = () => {
    setRegenerateKey(prev => prev + 1);
  };

  return (
    <div className="font-sans min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 items-center">
        <h1 className="text-4xl font-bold text-center">Letter Generator</h1>
        <p className="text-lg text-center max-w-2xl">
          Generate unique artistic letters using p5.js. Each generation creates a different pattern of curves and lines that form letter-like shapes.
        </p>
        
        <button
          onClick={handleGenerateLetters}
          className="rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg px-8 py-4 transition-colors"
        >
          Generate New Letters
        </button>

        <div className="w-full flex justify-center">
          <P5Sketch key={regenerateKey} />
        </div>
      </main>
    </div>
  );
}
