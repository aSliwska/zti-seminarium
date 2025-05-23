'use client';

import React, { useState } from 'react';
import { useFormStatus } from 'react-dom';
import styles from "./hooks.module.css";

export default function FormStatusHook() {
  const [submittedData, setSubmittedData] = useState(null);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setSubmittedData(data);
  };

  const { pending } = useFormStatus();

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

      <div className={styles.content}>
        <button type="submit" disabled={pending}>
          {pending ? 'Submitting...' : 'Yield'}
        </button>
        {submittedData && (
          <span>Soul sold!</span>
        )}
      </div>
      {submittedData && (
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
      )}
    </form>
  );
}