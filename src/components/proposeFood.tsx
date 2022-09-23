import { FC, useState, useEffect, useCallback } from "react"
import {
  Title,
  Autocomplete,
  Select,
  Table,
  Stack,
  Group,
  Button,
} from "@mantine/core"
import { formList, useForm } from "@mantine/form"

/*type NowFeeling = {
  id: number
  name: string
}*/

export const ProposeFood: FC = () => {
  const pullDownDeta = ["悲しい", "嬉しい", "二日酔い", "怒り"]
  const selectDeta = [
    { value: "悲しい", label: "悲しい" },
    { value: "嬉しい", label: "嬉しい" },
    { value: "二日酔い", label: "二日酔い" },
    { value: "怒り", label: "怒り" },
  ]

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

  const displayDeta = Relation.map(element => {
    const Deta = []
    if (element.feel.name == nowFeeling) {
      Deta.push({
        food: element.food.name,
        evaluation: element.evaluation,
      })
    }
    return Deta
  })

  const rows = displayDeta.map(element => (
    <tr key={element.food}>
      <td>{element.food}</td>
      <td>{element.evaluation}</td>
    </tr>
  ))

  const [nowFeeling, setNowFeeling] = useState<string | null>("none")

  return (
    <>
      <Title>気分にあったオススメ料理</Title>
      <Select
        label='あなたの気分を選んでください'
        placeholder='ここをクリックして選択'
        data={selectDeta}
        onChange={e => {
          setNowFeeling(e)
        }}
      />

      <Table>
        <thead>
          <tr>
            <th>食べ物</th>
            <th>評価</th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
        </tbody>
      </Table>
    </>
  )
}
