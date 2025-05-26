'use client';

import styles from "./hooks.module.css";
import FormSubmit from './FormSubmit';
import { useState } from "react";


export default function FormStatusHook() {
  const [submittedData, setSubmittedData] = useState(null);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setSubmittedData(data);
  };

  return (
    <form 
      className={styles.columnContent}
      method="POST" 
      onSubmit={handleSubmit}
    >
      <div className={styles.content}>
        <span>Your full legal name:</span>
        <input name="name" type="text" required/>
      </div>
      
      <div className={styles.content}>
        <span>I agree to sell my soul to AGH:</span>
        <input name="agreement" type="checkbox"/>
      </div>

      <FormSubmit submittedData={submittedData}/>
    </form>
  );
}
