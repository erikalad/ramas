import Image from "next/image";
import styles from "./page.module.css";
import Datos from "./datos";

export default function Home() {
  return (
    <div className={styles.page}>
      <div>Hola en vivo</div>
      <div>Conflicto 1</div>
      <Datos />

     
      <div>Conflicto 5</div>
      <div>Conflicto 6</div>
      <div>Conflicto 4</div>
      <div>Hola 5</div>
      <div>Conflicto 6</div>
    </div>
  );
}