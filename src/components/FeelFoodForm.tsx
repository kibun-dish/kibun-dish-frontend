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
  Input,
  Grid,
} from "@mantine/core"
import { FC, useCallback, useState } from "react"
import { postApi } from "../utils/api"

type Food = {
  id: number
  name: string
}
type Feel = {
  id: number
  name: string
}
type Relation = {
  id: number
  feel_id: number
  food_id: number
  evaluation: number
  feel: Feel
  food: Food
}

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
  const foods: Food[] = [
    { id: 1, name: "うどん" },
    { id: 2, name: "カレー" },
  ]

  // FeelのGET
  const feels: Feel[] = [
    { id: 1, name: "悲しい" },
    { id: 2, name: "嬉しい" },
  ]

  // RelationのGET
  const relations: Relation[] = [
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
      feel: { id: 4, name: "悲しい" },
      food: { id: 5, name: "うどん" },
    },
  ]

  const [isOpenAddFeelField, setIsOpenAddFeelField] = useState(false)
  const [isOpenAddFoodField, setIsOpenAddFoodField] = useState(false)

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

  const feelForm = useForm({
    initialValues: {
      name: "",
    },
    validate: {
      name: v => (v === "" ? "入力してください" : null),
    },
  })
  const foodForm = useForm({
    initialValues: {
      name: "",
    },
    validate: {
      name: v => (v === "" ? "入力してください" : null),
    },
  })

  const onSubmit = useCallback(() => {
    console.log(formParams.values)
    postApi("/relations", formParams)
    formParams.reset()
  }, [formParams])

  const addFeel = useCallback(() => {
    console.log("addFeel", feelForm.values)
    postApi("/feel", feelForm)
    setIsOpenAddFeelField(false)
    feelForm.reset()
  }, [feelForm])

  const addFood = useCallback(() => {
    console.log("addFeel", foodForm.values)
    postApi("/food", foodForm)
    setIsOpenAddFoodField(false)
    foodForm.reset()
  }, [foodForm])

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

        <Stack>
          <h2>新しい感情を追加</h2>
          {isOpenAddFeelField ? (
            <form onSubmit={feelForm.onSubmit(addFeel)}>
              <Grid>
                <Grid.Col span={8}>
                  <TextInput {...feelForm.getInputProps("name")} />
                </Grid.Col>
                <Grid.Col span={4}>
                  <Button type='submit'>追加</Button>
                </Grid.Col>
              </Grid>
            </form>
          ) : (
            <Button onClick={() => setIsOpenAddFeelField(true)}>+</Button>
          )}
        </Stack>

        <Stack>
          <h2>新しい食べたものを追加</h2>
          {isOpenAddFoodField ? (
            <form onSubmit={foodForm.onSubmit(addFood)}>
              <Grid>
                <Grid.Col span={8}>
                  <TextInput {...foodForm.getInputProps("name")} />
                </Grid.Col>
                <Grid.Col span={4}>
                  <Button type='submit'>追加</Button>
                </Grid.Col>
              </Grid>
            </form>
          ) : (
            <Button onClick={() => setIsOpenAddFoodField(true)}>+</Button>
          )}
        </Stack>
      </Box>
    </div>
  )
}
