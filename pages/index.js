import Head from "next/head";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";

/* By default, NextJS renders everything server-side during the build process. We 
need to tell it not to do that here so that our components can connect to Ably's APIs */
const AblyNewsComponent = dynamic(
  () => import("../components/AblyNewsComponent"),
  { ssr: false }
);

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ably Realtime News Demo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image
          alt="ably logo"
          src="https://static.ably.dev/motif-red.svg?lorem-ipsum"
          width="160px"
          height="100%"
        ></Image>
        <h1>Realtime News</h1>

        <AblyNewsComponent apiKey={props.ablyApiKey} />
      </main>

      <Footer />
    </div>
  );
}

export const getServerSideProps = () => {
  return {
    props: {
      ablyApiKey: process.env.ABLY_API_KEY,
    },
  };
};
