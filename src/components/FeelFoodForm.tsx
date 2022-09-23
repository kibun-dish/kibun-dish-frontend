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

export const FeelFoodForm: FC = () => {
  // data に /aaa のエンドポイントから取得したデータが入る。
  // const { data, mutate, error } = useGetApi("/aaa")

  // mutate でPOST、PUT、DELETE　した時に、キャッシュのデータを更新する。
  // mutate({a:"aa",b:"bb"},false)

  // error は、データ取得に失敗したときに、trueになる。
  // if (error) {
  //   return
  // }

  // 欲しいエンドポイント
  // Food, Feel, Relation をそれぞれ、全て返すGETメソッド
  // Food の POST は、 name

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

  const form = useForm({
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
    console.log(form.values)
  }, [form])

  return (
    <div>
      <Box sx={{ maxWidth: 300 }} mx='auto'>
        <form onSubmit={form.onSubmit(onSubmit)}>
          <Stack>
            <Select
              label='今日の気分'
              placeholder='選択してください'
              // data={[
              //   { value: 1, label: "React" },
              //   { value: 2, label: "Angular" },
              //   { value: 3, label: "Svelte" },
              //   { value: 4, label: "Vue" },
              // ]}
              data={feels.map(feel => {
                return { value: feel.id, label: feel.name }
              })}
              {...form.getInputProps("feel_id")}
            />
            <Select
              label='食べたもの'
              placeholder='選択してください'
              // data={[
              //   { value: 1, label: "React" },
              //   { value: 2, label: "Angular" },
              //   { value: 3, label: "Svelte" },
              //   { value: 4, label: "Vue" },
              // ]}

              data={foods.map(food => {
                return { value: food.id, label: food.name }
              })}
              {...form.getInputProps("food_id")}
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
