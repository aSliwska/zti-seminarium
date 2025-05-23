'use client';

import styles from "./hooks.module.css";
import { useLayoutEffect, useRef, useState } from "react";

export default function RefLayoutEffectHook() {
  const boxRef = useRef(null);
  const [renderTooltip, setRenderTooltip] = useState(false);

  return (
    <div className={styles.content}>
      <div 
        className={styles.resizableBox + " " + styles.dashedDiv}
        ref={boxRef}
        onPointerEnter={() => setRenderTooltip(true)}
        onPointerLeave={() => setRenderTooltip(false)}
      />
      {renderTooltip && <Tooltip boxRef={boxRef}/>}
    </div>
  );
}

function Tooltip({ boxRef }) {
  const tooltipRef = useRef(null);
  const [tooltipTop, setTooltipTop] = useState(0);
  const [tooltipLeft, setTooltipLeft] = useState(0);

  useLayoutEffect(() => {
    if (boxRef && tooltipRef) {
      const { right, top, height, width } = boxRef.current.getBoundingClientRect();
      const { height: tooltipHeight, width: tooltipWidth } = tooltipRef.current.getBoundingClientRect();
      let newTop = top - tooltipHeight - 16;
      if (top + height / 2 < window.innerHeight / 2) {
        newTop += height + tooltipHeight + 32;
      } 
      setTooltipTop(newTop);
      setTooltipLeft(right - width / 2 - tooltipWidth / 2);
    }
  }, [boxRef, tooltipRef]);

  return (
    <div 
        className={styles.absoluteLabel}
        style={{ top: tooltipTop, left: tooltipLeft}}
        ref={tooltipRef}
      >
        My position is fixed.
      </div>
  );
}