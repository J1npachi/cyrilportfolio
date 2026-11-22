"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./TypingTest.module.css";

// Edit these sentences to anything you like. Keep them short.
const SENTENCES = [
  "Good code is simple, clear, and easy to change.",
  "I learn best by building something real and fixing what breaks.",
  "Every program starts with one small idea and a lot of testing.",
  "Fast typing helps, but clear thinking helps more.",
  "A working project is worth more than a perfect plan.",
];

const STORAGE_KEY = "typing-best-wpm";

type Result = { wpm: number; accuracy: number };

export default function TypingTest() {
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [best, setBest] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const target = SENTENCES[index];
  const done = result !== null;

  // Load the visitor's best score from their own browser, if allowed.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setBest(Number(saved));
    } catch {
      // Storage can be blocked; the test still works.
    }
  }, []);

  const chars = useMemo(() => target.split(""), [target]);

  function reset(nextIndex?: number) {
    setIndex((current) => {
      if (nextIndex !== undefined) return nextIndex;
      if (SENTENCES.length < 2) return current;
      let n = current;
      while (n === current) n = Math.floor(Math.random() * SENTENCES.length);
      return n;
    });
    setTyped("");
    setStartedAt(null);
    setResult(null);
    inputRef.current?.focus();
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (done) return;
    const value = e.target.value.slice(0, target.length);
    const start = startedAt ?? Date.now();
    if (startedAt === null) setStartedAt(start);
    setTyped(value);

    if (value.length === target.length) {
      let correct = 0;
      for (let i = 0; i < target.length; i++) {
        if (value[i] === target[i]) correct++;
      }
      const minutes = Math.max((Date.now() - start) / 60000, 1 / 600);
      const wpm = Math.round(correct / 5 / minutes);
      const accuracy = Math.round((correct / target.length) * 100);
      setResult({ wpm, accuracy });

      if (best === null || wpm > best) {
        setBest(wpm);
        try {
          localStorage.setItem(STORAGE_KEY, String(wpm));
        } catch {
          // Ignore storage errors.
        }
      }
    }
  }

  return (
    <div className={styles.wrap}>
      <div
        className={styles.text}
        onClick={() => inputRef.current?.focus()}
        aria-hidden="true"
      >
        {chars.map((ch, i) => {
          let state = styles.pending;
          if (i < typed.length) {
            state = typed[i] === ch ? styles.correct : styles.wrong;
          } else if (i === typed.length && !done) {
            state = `${styles.pending} ${styles.current}`;
          }
          return (
            <span key={i} className={state}>
              {ch}
            </span>
          );
        })}
      </div>

      <label className={styles.label} htmlFor="typing-input">
        Type the sentence above
      </label>
      <input
        id="typing-input"
        ref={inputRef}
        className={styles.input}
        type="text"
        value={typed}
        onChange={onChange}
        readOnly={done}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        placeholder="Start typing to begin"
        aria-describedby="typing-target"
      />
      <p id="typing-target" className={styles.srOnly}>
        {target}
      </p>

      <div className={styles.footer}>
        <p className={styles.result} aria-live="polite">
          {done
            ? `${result.wpm} WPM, ${result.accuracy}% accuracy`
            : "Your speed and accuracy appear here when you finish."}
        </p>
        <div className={styles.actions}>
          {best !== null && (
            <span className={styles.best}>Best: {best} WPM</span>
          )}
          <button type="button" className={styles.btn} onClick={() => reset()}>
            {done ? "Try another" : "New sentence"}
          </button>
        </div>
      </div>
    </div>
  );
}
