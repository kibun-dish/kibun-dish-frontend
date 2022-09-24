import type { NextPage } from "next"
import Head from "next/head"
import { Button, Center, Divider, Grid, Group, Tabs } from "@mantine/core"
import { useGetApi } from "../hooks/useApi"
import { ProposeFood } from "../components/proposeFood"
import { Layout } from "../components/Layout"
import { useState } from "react"
import { FeelFoodForm } from "../components/FeelFoodForm"
import { Recommend } from "../components/Recommend"
import { Youtube } from "../components/Youtube"

type Tabs = "食事の履歴" | "食事の記録"
const Home: NextPage = () => {
  const [tabs, setTabs] = useState<Tabs>("食事の履歴")

  return (
    <Layout>
      <section className='flex justify-center'>
        <div
          onClick={() => setTabs("食事の履歴")}
          className={`px-10 cursor-pointer ${
            tabs === "食事の履歴" && "border-b-2 border-blue-500 font-bold"
          }`}
        >
          食事の履歴
        </div>
        <div
          onClick={() => setTabs("食事の記録")}
          className={`px-10 cursor-pointer ${
            tabs === "食事の記録" && "border-b-2 border-blue-500 font-bold"
          }`}
        >
          食事の記録
        </div>
      </section>

      <Divider />

      <section className='mt-10'>
        {tabs === "食事の履歴" ? (
          <div>
            <ProposeFood />
            <Center mt={40}>
              <Grid className='' align='center'>
                <Grid.Col md={8}>
                  <Recommend />
                </Grid.Col>
                <Grid.Col md={4}>
                  <Youtube />
                </Grid.Col>
              </Grid>
            </Center>
          </div>
        ) : (
          <div>
            <FeelFoodForm />
          </div>
        )}
      </section>
      <div></div>
      <div></div>
    </Layout>
  )
}

export default Home
