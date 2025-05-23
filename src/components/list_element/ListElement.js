import styles from "./list_element.module.css";

export default function ListElement({ title, children }) {
  return (
    <div className={styles.element}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}