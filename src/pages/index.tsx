import type { NextPage } from "next"
import Head from "next/head"
import { Button, Center, Divider, Group, Tabs } from "@mantine/core"
import { useGetApi } from "../hooks/useApi"
import { ProposeFood } from "../components/ProposeFood"
import { Layout } from "../components/Layout"
import { useState } from "react"
import { FeelFoodForm } from "../components/FeelFoodForm"
import { Recommend } from "../components/Recommend"

type Tabs = "食前" | "食後"
const Home: NextPage = () => {
  const [tabs, setTabs] = useState<Tabs>("食前")

  return (
    <Layout>
      <section className='flex justify-center'>
        <div
          onClick={() => setTabs("食前")}
          className={`px-10 cursor-pointer ${
            tabs === "食前" && "border-b-2 border-blue-500 font-bold"
          }`}
        >
          食前
        </div>
        <div
          onClick={() => setTabs("食後")}
          className={`px-10 cursor-pointer ${
            tabs === "食後" && "border-b-2 border-blue-500 font-bold"
          }`}
        >
          食後
        </div>
      </section>

      <Divider />

      <section className='mt-10'>
        {tabs === "食前" ? (
          <div>
            <ProposeFood />
            <Recommend />
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
