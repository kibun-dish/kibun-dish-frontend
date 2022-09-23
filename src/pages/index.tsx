import type { NextPage } from "next"
import Head from "next/head"
import { Button, Center, Group } from "@mantine/core"
import { useGetApi } from "../hooks/useApi"
import { ProposeFood } from "../components/proposeFood"

const Home: NextPage = () => {
  return (
    <div>
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
        <h1>気分dish</h1>
        <ProposeFood />
      </main>

      <footer></footer>
    </div>
  )
}

export default Home
