import type { NextPage } from "next"
import Head from "next/head"
import { Button, Center, Group } from "@mantine/core"

const Home: NextPage = () => {
  return (
    <div>
      <header></header>

      <main>
        <div className='text-red-400'>aaa</div>
        <h1>気分dish</h1>
        <Button>aaa</Button>

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
