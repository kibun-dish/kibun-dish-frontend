import { NextPage } from "next"
import { FeelFoodForm } from "../components/FeelFoodForm"
import { Layout } from "../components/Layout"
import { Recommend } from "../components/Recommend"

const Form: NextPage = () => {
  return (
    <Layout>
      <FeelFoodForm />
      <Recommend />
    </Layout>
  )
}

export default Form
