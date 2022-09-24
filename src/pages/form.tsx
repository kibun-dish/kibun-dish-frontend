import { NextPage } from "next"
import { FeelFoodForm } from "../components/FeelFoodForm"
import { Layout } from "../components/Layout"

const Form: NextPage = () => {
  return (
    <Layout>
      <FeelFoodForm />
    </Layout>
  )
}

export default Form
