import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Heading } from "@chakra-ui/react";

export default function Home() {
   return (
      <>
         <Head>
            <title>이호연</title>
            <meta name="description" content="이호연 포트폴리오입니다." />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main>
            <Heading>안녕하시오리까</Heading>
         </main>
      </>
   );
}
