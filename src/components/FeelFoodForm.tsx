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
  NumberInput,
} from "@mantine/core"
import { FC, useCallback, useState } from "react"
import { postApi } from "../utils/api"
import { Feel } from "../types/feel"
import { Food } from "../types/foo"
import { Relation } from "../types/relation"

export const FeelFoodForm: FC = () => {
  const { data: foods, mutate: foodMutate } = useGetApi<Food[]>("/food")
  const { data: feels, mutate: feelMutate } = useGetApi<Feel[]>("/feel")
  const { data: relations2, mutate: relationsMutate } = useGetApi("/relation")
  // console.log({ foods })
  // console.log(feels2)
  //console.log(relations2)

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

  const formParams = useForm({
    initialValues: {
      feel_id: 0,
      food_id: 0,
      evaluation: 1,
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
    // postApi("/relation", formParams.values)
    formParams.reset()
  }, [formParams])

  const onSubmitAddFeel = useCallback(() => {
    console.log("onSubmitAddFeel", feelForm.values)
    // postApi("/feels", feelForm)

    feelForm.reset()
  }, [feelForm])

  const onSubmitAddFood = useCallback(() => {
    console.log("onSubmitAddFeel", foodForm.values)
    // postApi("/foods", foodForm)

    foodForm.reset()
  }, [foodForm])

  return (
    <div>
      <Box className='max-w-800px w-80vw' mx='auto'>
        <form onSubmit={formParams.onSubmit(onSubmit)}>
          <Grid>
            <Grid.Col sm={4}>
              {feels && (
                <Select
                  label='今日の気分'
                  placeholder='選択してください'
                  data={feels.map(feel => {
                    return { value: feel.id, label: feel.name }
                  })}
                  {...formParams.getInputProps("feel_id")}
                />
              )}
            </Grid.Col>
            <Grid.Col sm={4}>
              {foods && (
                <Select
                  label='食べたもの'
                  placeholder='選択してください'
                  data={foods.map(food => {
                    return { value: food.id, label: food.name }
                  })}
                  {...formParams.getInputProps("food_id")}
                />
              )}
            </Grid.Col>
            <Grid.Col sm={2}>
              <NumberInput
                label='評価'
                min={1}
                max={5}
                {...formParams.getInputProps("evaluation")}
              />
            </Grid.Col>

            <Grid.Col sm={2}>
              <Group position='right' mt={27}>
                <Button type='submit'>Submit</Button>
              </Group>
            </Grid.Col>
          </Grid>
        </form>

        <Grid mt={20}>
          <Grid.Col sm={5}>
            <Stack>
              <h2>新しい気分を追加</h2>
              <form onSubmit={feelForm.onSubmit(onSubmitAddFeel)}>
                <Grid>
                  <Grid.Col span={8}>
                    <TextInput {...feelForm.getInputProps("name")} />
                  </Grid.Col>
                  <Grid.Col span={4}>
                    <Button type='submit'>追加</Button>
                  </Grid.Col>
                </Grid>
              </form>
            </Stack>
          </Grid.Col>

          <Grid.Col sm={5}>
            <Stack>
              <h2>新しい食べたものを追加</h2>
              <form onSubmit={foodForm.onSubmit(onSubmitAddFood)}>
                <Grid>
                  <Grid.Col span={8}>
                    <TextInput {...foodForm.getInputProps("name")} />
                  </Grid.Col>
                  <Grid.Col span={4}>
                    <Button type='submit'>追加</Button>
                  </Grid.Col>
                </Grid>
              </form>
            </Stack>
          </Grid.Col>
        </Grid>
      </Box>
    </div>
  )
}
