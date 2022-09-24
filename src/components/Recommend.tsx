import React from "react"
import { Relation } from "../types/relation"
import {
  Title,
  Autocomplete,
  Select,
  Table,
  Stack,
  Group,
  Button,
  Text,
} from "@mantine/core"

type Relation2 = Relation & { num: number }

export const Recommend = () => {
  const relations: Relation2[] = [
    {
      id: 1,
      feel_id: 1,
      food_id: 1,
      evaluation: 5,
      feel: { id: 1, name: "悲しい" },
      food: { id: 1, name: "うどん" },
      num: 10,
    },
    {
      id: 2,
      feel_id: 6,
      food_id: 8,
      evaluation: 5,
      feel: { id: 6, name: "悲しい" },
      food: { id: 8, name: "冷麺" },
      num: 5,
    },
    {
      id: 3,
      feel_id: 2,
      food_id: 2,
      evaluation: 3,
      feel: { id: 2, name: "悲しい" },
      food: { id: 2, name: "ラーメン" },
      num: 6,
    },
    {
      id: 4,
      feel_id: 7,
      food_id: 4,
      evaluation: 2,
      feel: { id: 7, name: "悲しい" },
      food: { id: 4, name: "パスタ" },
      num: 3,
    },
    {
      id: 5,
      feel_id: 9,
      food_id: 10,
      evaluation: 9,
      feel: { id: 9, name: "嬉しい" },
      food: { id: 10, name: "タピオカ" },
      num: 1,
    },
  ]

  return (
    <div className='mx-auto max-w-500px w-80vw'>
      <Text className='text-xl mb-4'>他の人はこんな食事をしています</Text>

      <Table
        striped
        className='border-separate border-2 m-4 max-w-800px table-auto'
      >
        <thead>
          <tr>
            <th>食べ物</th>
            <th>人数</th>
            <th>評価</th>
          </tr>
        </thead>
        <tbody>
          {/*  {createTable} */}
          {relations.map(element => (
            <tr key={element.id}>
              <td>{element.food.name}</td>
              <td>{element.evaluation}</td>
              <td>{element.num}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
