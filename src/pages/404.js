import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./style.module.css";

export default function MovieDetail() {
  return (
    <>
      <main className={styles.notFoundMain}>
        <div>This a custom Not found page</div>
      </main>
    </>
  );
}
