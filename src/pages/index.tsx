import type { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/Layout/Layout/Layout";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <Layout title="Pacatele lui Adam | Astrella Studios" description="">
      <main className={styles.container}>
        <h1>Continut</h1>
      </main>
    </Layout>
  );
};

export default Home;
