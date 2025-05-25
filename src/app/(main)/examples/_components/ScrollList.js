'use client';

import { useLayoutEffect, useRef, useState } from "react";
import styles from "./examples.module.css";

export default function ScrollList() {
  const [values, setValues] = useState([1,2,3,4,5,6,7,8,9,10]);
  const [tooltipProps, setTooltipProps] = useState(null);

  return (
    <div>
      <div className={styles.content + " " + styles.scrollList}>
        {values.map((value, index) => 
        <Box value={value} key={"box_" + index} setTooltipProps={setTooltipProps}/>)}
      </div>
      {(tooltipProps !== null) && <Tooltip props={tooltipProps}/>}
    </div>
  );
}

function Box({ value, setTooltipProps}) {
  const boxRef = useRef(null);
  
  return (
      <div 
        className={styles.dashedDiv}
        ref={boxRef}
        onPointerEnter={() => setTooltipProps({ parent: boxRef, content: value })}
        onPointerLeave={() => setTooltipProps(null)}
      />
  );
}

function Tooltip({ props }) {
  const tooltipRef = useRef(null);
  const [tooltipLeft, setTooltipLeft] = useState(0);
  const [content, setContent] = useState(null);

  useLayoutEffect(() => {
    if (props && tooltipRef) {
      const { parent, content } = props;
      const { left, top, height, width } = parent.current.getBoundingClientRect();
      const { height: tooltipHeight, width: tooltipWidth } = tooltipRef.current.getBoundingClientRect();
 
      setTooltipLeft(left );
      setContent(content);
    }
  }, [props, tooltipRef]);

  return (
    <div 
      className={styles.relativeLabel}
      style={{ top: -26, left: tooltipLeft}}
      ref={tooltipRef}
    >
      {content}
    </div>
  );
}