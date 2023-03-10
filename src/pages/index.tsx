import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import useAuthState from "@/hooks/useAuthState";
import { useEffect } from "react";
import { Button } from "@chakra-ui/react";

export default function Home() {
  const user = useAuthState();

  return (
    <>
      <Head>
        <title>Forum Project</title>
        <meta name="description" content="Forum for College" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{user ? `Logged In as ${user?.name}` : "Not Logged In"}</main>
    </>
  );
}
