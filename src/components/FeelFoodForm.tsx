import { useGetApi } from "../hooks/useApi"
import { useForm } from "@mantine/form"
import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  Select,
  Stack,
  PasswordInput,
  Autocomplete,
} from "@mantine/core"
import { FC, useCallback } from "react"
import { postApi } from "../utils/api"

export const FeelFoodForm: FC = () => {
  // data に /aaa のエンドポイントから取得したデータが入る。
  // const { data, mutate, error } = useGetApi("/aaa")

  // mutate でPOST、PUT、DELETE　した時に、キャッシュのデータを更新する。
  // mutate({a:"aa",b:"bb"},false)

  // error は、データ取得に失敗したときに、trueになる。
  // if (error) {
  //   return
  // }

  // FoodのGET
  const foods = [
    { id: 1, name: "うどん" },
    { id: 2, name: "カレー" },
  ]

  // FeelのGET
  const feels = [
    { id: 1, name: "悲しい" },
    { id: 2, name: "嬉しい" },
  ]

  // RelationのGET
  const Relation = [
    {
      id: 1,
      feel_id: 1,
      food_id: 1,
      evaluation: 5,
      feel: { id: 1, name: "悲しい" },
      food: { id: 1, name: "うどん" },
    },
    {
      id: 2,
      feel_id: 4,
      food_id: 5,
      evaluation: 5,
      feel: { id: 1, name: "悲しい" },
      food: { id: 1, name: "うどん" },
    },
  ]

  const formParams = useForm({
    initialValues: {
      feel_id: 0,
      food_id: 0,
    },

    validate: {
      feel_id: value => (value === 0 ? "気分を選択してください" : null),
      food_id: value => (value === 0 ? "食べものを選択してください" : null),
    },
  })

  const onSubmit = useCallback(() => {
    console.log(formParams.values)
    postApi("/relations", formParams)
  }, [formParams])

  return (
    <div>
      <Box className='max-w-300px' mx='auto'>
        <form onSubmit={formParams.onSubmit(onSubmit)}>
          <Stack>
            <Select
              label='今日の気分'
              placeholder='選択してください'
              data={feels.map(feel => {
                return { value: feel.id, label: feel.name }
              })}
              {...formParams.getInputProps("feel_id")}
            />
            <Select
              label='食べたもの'
              placeholder='選択してください'
              data={foods.map(food => {
                return { value: food.id, label: food.name }
              })}
              {...formParams.getInputProps("food_id")}
            />

            <Group position='right' mt='md'>
              <Button type='submit'>Submit</Button>
            </Group>
          </Stack>
        </form>
      </Box>
    </div>
  )
}
