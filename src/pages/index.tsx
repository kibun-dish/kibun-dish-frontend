import type { NextPage } from "next"
import Head from "next/head"
import { Button, Center, Group } from "@mantine/core"
import { useGetApi } from "../hooks/useApi"
import { ProposeFood } from "../components/proposeFood"

const Home: NextPage = () => {
  // data に /aaa のエンドポイントから取得したデータが入る。
  // const { data, mutate, error } = useGetApi("/aaa")

  // mutate でPOST、PUT、DELETE　した時に、キャッシュのデータを更新する。
  // mutate({a:"aa",b:"bb"},false)

  // error は、データ取得に失敗したときに、trueになる。
  // if (error) {
  //   return
  // }

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
        <div className='text-red-400'>aaa</div>
        <h1>気分dish</h1>
        <Button>aaa</Button>
        <ProposeFood />

        <Center>
          <Button>aaa</Button>
        </Center>

        <Group>
          <Button>aaa</Button>
          <Button>aaa</Button>
          <Button>aaa</Button>
        </Group>
      </main>

      <footer></footer>
    </div>
  )
}

export default Home
