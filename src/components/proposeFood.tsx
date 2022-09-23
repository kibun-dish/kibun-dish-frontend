import React, { FC, useState, useEffect, useCallback } from "react"
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
import { Relation } from "../types/relation"

type displayData = {
  food: string
  evaluation: number
}

export const ProposeFood: FC = () => {
  const pullDownDeta = ["悲しい", "嬉しい", "二日酔い", "怒り"]
  const selectDeta = [
    { value: "悲しい", label: "悲しい" },
    { value: "嬉しい", label: "嬉しい" },
    { value: "二日酔い", label: "二日酔い" },
    { value: "怒り", label: "怒り" },
  ]

  const relation: Relation[] = [
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

  const [nowFeeling, setNowFeeling] = useState<string | null>("none")
  const [tableData, setTableData] = useState<Relation[]>([])

  const displayData = useCallback(() => {
    // const data: displayData[] = []
    // relation.map(element => {
    //   if (element.feel.name == nowFeeling) {
    //     data.push({
    //       food: element.food.name,
    //       evaluation: element.evaluation,
    //     })
    //   }
    // })
    const data: Relation[] = relation.filter(element => {
      return element.feel.name == nowFeeling
    })
    console.log(data)
    setTableData(data)
  }, [nowFeeling, relation])

  const onChangeFeel = useCallback(
    (e: any) => {
      console.log(e)
      setNowFeeling(e)
      displayData()
    },
    [displayData],
  )

  const rows = () => {
    tableData.map(element => (
      <tr key={element.food}>
        <td>{element.food}</td>
        <td>{element.evaluation}</td>
      </tr>
    ))
  }

  return (
    <>
      <Title>気分にあったオススメ料理</Title>
      <Select
        label='あなたの気分を選んでください'
        placeholder='ここをクリックして選択'
        data={selectDeta}
        // onChange={e => {
        //   setNowFeeling(e)
        // }}
        onChange={e => onChangeFeel(e)}
      />

      <Table>
        <thead>
          <tr>
            <th>食べ物</th>
            <th>評価</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(element => (
            <tr key={element.food}>
              <td>{element.food}</td>
              <td>{element.evaluation}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
