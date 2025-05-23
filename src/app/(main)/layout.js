'use client';

import { usePathname } from "next/navigation";
import styles from "./main_layout.module.css";
import Link from "next/link";

export default function MainLayout({ children }) {
  const path = usePathname();
  
  return (
    <div>
      <div className={styles.header}>
        <Link 
          className={styles.button + ((path === '/hooks') ? ` ${styles['button-current-page']}` : '')}
          href={'/hooks'}
        >Hooks</Link>
        <Link 
          className={styles.button + ((path === '/examples') ? ` ${styles['button-current-page']}` : '')}
          href={'/examples'}
        >Examples</Link>
      </div>

      <div className={styles["list-wrapper"]}>
        <div className={styles["list-padding"]}/>
        <div className={styles.list}>
          {children}
        </div>
        <div className={styles["list-padding"]}/>
      </div>
      
    </div>
  );
}