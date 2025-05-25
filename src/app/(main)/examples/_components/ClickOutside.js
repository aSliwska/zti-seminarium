'use client';

import { useEffect, useRef, useState } from "react";
import styles from "./examples.module.css";

export default function ClickOutside() {
  const boxRef = useRef(null);
  const tooltipRef = useRef(null);
  const { isComponentVisible, setIsComponentVisible } = useComponentVisible(false, [boxRef, tooltipRef]);


  return (
    <div className={styles.columnContent + " " + styles.centered}>
      <div 
        className={styles.dashedDiv} 
        ref={boxRef}
        onClick={() => setIsComponentVisible(!isComponentVisible)}
      />
      {isComponentVisible && 
        <div className={styles.tooltip} ref={tooltipRef}>
          Some kind of menu
          <button>Button</button>
        </div>
      }
    </div>
  );
}

function useComponentVisible(initialIsVisible, refs) {
  const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);

  const handleClickOutside = (event) => {
    if (refs.every((ref) => !ref?.current?.contains(event.target))) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => { document.removeEventListener('click', handleClickOutside, true); }
  }, []);

  return { isComponentVisible, setIsComponentVisible };
}