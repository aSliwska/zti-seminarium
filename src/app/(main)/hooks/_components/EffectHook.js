'use client';

import { delay } from "@/utils/utils";
import styles from "./hooks.module.css";
import { useEffect, useState } from "react";

export default function EffectHook() {
  const [data, setData] = useState("Data loaded 0 times.");
  const [times, setTimes] = useState(0);
  const [reloadTrigger, setReloadTrigger] = useState(true);

  useEffect(() => {
    setData("Wait...");
    delay(1000);
    setData("Data loaded " + (times + 1) + " times.");
    setTimes(times + 1);
  }, [reloadTrigger, setData, setTimes]);
  
  return (
    <div className={styles.content}>
      <button onClick={() => setReloadTrigger(!reloadTrigger)}>
        Reload data
      </button>
      <span className={styles['load-text']}>{data}</span>
    </div>
  );
}