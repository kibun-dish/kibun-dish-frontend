import { NextPage } from "next"
import { FeelFoodForm } from "../components/FeelFoodForm"
import { Layout } from "../components/Layout"
import { Recommend } from "../components/Recommend"
import { Youtube } from "../components/Youtube"

const Form: NextPage = () => {
  return (
    <Layout>
      <FeelFoodForm />
      <Recommend />
      <Youtube />
    </Layout>
  )
}

export default Form
