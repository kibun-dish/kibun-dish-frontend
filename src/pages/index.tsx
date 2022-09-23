import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>気分dish</title>
        <meta
          name='description'
          content='気分・状態で料理をオススメするサービス'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header></header>

      <main>
        <div className='text-red-400'>aaa</div>
        <h1>気分dish</h1>
      </main>

      <footer></footer>
    </div>
  )
}

export default Home
