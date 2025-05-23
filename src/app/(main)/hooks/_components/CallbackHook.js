'use client';

import { useCallback, useState } from "react";
import styles from "./hooks.module.css";

export default function CallbackHook() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const sayHi = useCallback(() => {
    setMessage("Hello, " + name + ".");
  }, [name]);
  return (
    <div className={styles.columnContent}>
      <input name="name" type="text" placeholder="Name" onChange={(event) => setName(event.target.value)}/>
      <button onClick={sayHi}>Say hi</button>
      <span>{message}</span>
    </div>
  );
}