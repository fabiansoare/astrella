import { FC } from "react";
import Head from "next/head";
import HeaderProps from "./HeaderProps.interface";
import styles from "./Header.module.scss";

const Header: FC<HeaderProps> = ({ title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1>Astrella</h1>
      </header>
    </>
  );
};

export default Header;
