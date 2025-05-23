'use client';

import { createContext, useContext, useReducer } from "react";
import styles from "./hooks.module.css";

export default function ContextReducerHook() {
  return (
    <StarsProvider>
      <Component1/>
    </StarsProvider>
  );
}

function Component1() {
  const { number } = useContext(StarContext);
  
  return (
    <div className={styles.columnContent + " " + styles.dashedDiv}>
      <span style={{minHeight:22}}>{"★".repeat(number)}</span>
      <Component2/>
    </div>
  );
}

function Component2() {
  return (
    <div className={styles.dashedDiv}>
      <Component3/>
    </div>
  );
}

function Component3() {
  return (
    <div className={styles.dashedDiv}>
      <Component4/>
    </div>
  );
}

function Component4() {
  const { number } = useContext(StarContext);
  const dispatch = useContext(StarDispatchContext);

  return (
    <div className={styles.content + " " + styles.dashedDiv}>
      <button onClick={() => dispatch({ type: 'subtract' })}>-1</button>
      <span>{number}</span>
      <button onClick={() => dispatch({ type: 'add' })}>+1</button>
    </div>
  );
}
///////////////////////////////////////////////////

const StarContext = createContext(0);
const StarDispatchContext = createContext(null);

function StarsProvider({ children }) {
  const [stars, dispatch] = useReducer(starsReducer, { number: 0 });

  return (
    <StarContext.Provider value={stars}>
      <StarDispatchContext.Provider value={dispatch}>
        {children}
      </StarDispatchContext.Provider>
    </StarContext.Provider>
  );
}

function starsReducer(stars, action) {
  switch (action.type) {
    case 'add': {
      return { number: stars.number+1 };
    }
    case 'subtract': {
      return { number: (stars.number > 0) ? stars.number-1 : 0 };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}