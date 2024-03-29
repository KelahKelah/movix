import Head from "next/head";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import styles from "@components/styles/Home.module.css";

// const dmSans = DM_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.js</code>
          </p>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
      </main>
    </>
  );
}
