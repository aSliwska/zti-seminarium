'use client';

import styles from "./hooks.module.css";
import { useFormStatus } from 'react-dom';

export default function FormSubmit({ submittedData }) {
  const { pending, data, method, action } = useFormStatus();

  return (
    <>
      <div className={styles.content}>
        <button disabled={pending} type="submit">
          {pending ? 'Submitting...' : 'Yield'}
        </button>

        {submittedData && (
          <span>Soul sold!</span>
        )}
      </div>

      {submittedData && (
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
      )}
    </>
  );
}