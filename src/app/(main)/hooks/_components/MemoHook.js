'use client';

import { useEffect, useMemo, useState } from "react";
import styles from "./hooks.module.css";
import { delay } from "@/utils/utils";

export default function MemoHook() {

  return (
    <div className={styles.content}>
        <Message/>
        <WorseMessage />
    </div>
  );
}

function Message() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const calculation = useMemo(() => {
    delay(1000);
    return number * 5;
  }, [number]);

  return (
    <div className={styles.memos} style={{background: (dark) ? '#111111' : '#eeeeee'}}>
      <button onClick={() => setDark(!dark)}>Set theme</button>
      <input name="name" type="number" onChange={(event) => setNumber(event.target.value)}/>
      <span style={{color: (dark) ? '#eeeeee' : '#111111'}}>{calculation}</span>
    </div>
  );
}

function WorseMessage() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    delay(1000);
    setMessage(number * 5);
  });

  return (
    <div className={styles.memos} style={{background: (dark) ? '#111111' : '#eeeeee'}}>
      <button onClick={() => setDark(!dark)}>Set theme</button>
      <input name="name2" type="number" onChange={(event) => setNumber(event.target.value)}/>
      <span style={{color: (dark) ? '#eeeeee' : '#111111'}}>{message}</span>
    </div>
  );
}