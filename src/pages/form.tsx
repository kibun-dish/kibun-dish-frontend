import { NextPage } from "next"
import { FeelFoodForm } from "../components/FeelFoodForm"
import { Layout } from "../components/Layout"
import { Youtube } from "../components/Youtube"

const Form: NextPage = () => {
  return (
    <Layout>
      <FeelFoodForm />
      <Youtube />
    </Layout>
  )
}

export default Form
