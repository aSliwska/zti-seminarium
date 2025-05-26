'use client';

import { useState } from "react";
import styles from "./hooks.module.css";

export default function StateHook() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.content}>
      <button onClick={() => setCount(count + 1)}>
        Click!
      </button>
      <span>
        {count} click{(count === 1 ? '' : 's')}.
      </span>
    </div>
  );
}