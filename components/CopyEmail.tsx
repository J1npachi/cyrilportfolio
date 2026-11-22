"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./CopyEmail.module.css";

export default function CopyEmail({ email }: { email: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setState("copied");
    } catch {
      setState("failed");
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setState("idle"), 2200);
  }

  return (
    <div className={styles.row}>
      <button type="button" className={styles.btn} onClick={copy}>
        {state === "copied"
          ? "Copied"
          : state === "failed"
            ? "Copy failed. Select the email above."
            : "Copy email"}
      </button>
      <span className={styles.live} aria-live="polite">
        {state === "copied" ? "Email copied to clipboard" : ""}
      </span>
    </div>
  );
}
