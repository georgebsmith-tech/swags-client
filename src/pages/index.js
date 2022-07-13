import Head from 'next/head'
import Image from 'next/image'
import About from "../components/about/about";
import Container from "../components/container";
import { UseSideToggle } from "../components/navbar/useSideToggle";
import Services from "../components/services/services";
import WhyUs from "../components/why_us/why_us";
import styles from "../styles/Home.module.css";
import Landing from "./landing";

export default function Home() {
  return (
    <div>
      <Head>
        <title>swag</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          {/* <UseSideToggle> */}
          <Landing />
          {/* </UseSideToggle> */}
        </main>
      </div>
    </div>
  );
}
