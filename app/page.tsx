import Image from "next/image";
import styles from "./page.module.css";
import ContactCard from "../components/ContactCard";


export default function Home() {
  return (
    <main className={styles.main}>
      <ContactCard />
    </main>
  );
}
