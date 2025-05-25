'use client';

import { useLayoutEffect, useRef, useState } from "react";
import styles from "./examples.module.css";

export default function ScrollList() {
  const [values, setValues] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
  const [tooltipProps, setTooltipProps] = useState(null);

  return (
    <div>
      <div className={styles.content + " " + styles.scrollList}>
        {values.map((value, index) => 
          <Box value={value} key={"box_" + index} setTooltipProps={setTooltipProps}/>)
        }
      </div>
      <Tooltip props={tooltipProps}/>
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
    if (tooltipRef) {
      if (props) {
        const { parent, content } = props;
        const { left, width } = parent.current.getBoundingClientRect();
  
        setTooltipLeft(left + width/2 - 13);
        setContent(content);
      }
      else {
        setTooltipLeft(-999);
        setContent(null);
      }
    }
  }, [props, tooltipRef]);

  return (
    <div 
      className={styles.relativeLabel}
      style={{ left: tooltipLeft, top: 190}}
      ref={tooltipRef}
    >
      {content}
    </div>
  );
}