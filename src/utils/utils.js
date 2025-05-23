export function delay(ms) {
    let startTime = performance.now();
    while (performance.now() - startTime < ms) {
      // Do nothing for 500 ms to emulate extremely slow code
    }
} 
