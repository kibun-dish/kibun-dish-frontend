import React, { FC, useState, useEffect, useCallback } from "react"
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
import { Relation } from "../types/relation"

export const ProposeFood: FC = () => {
  const selectFeeling = [
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
      feel_id: 6,
      food_id: 8,
      evaluation: 5,
      feel: { id: 6, name: "悲しい" },
      food: { id: 8, name: "冷麺" },
    },
    {
      id: 3,
      feel_id: 2,
      food_id: 2,
      evaluation: 3,
      feel: { id: 2, name: "悲しい" },
      food: { id: 2, name: "ラーメン" },
    },
    {
      id: 4,
      feel_id: 7,
      food_id: 4,
      evaluation: 2,
      feel: { id: 7, name: "悲しい" },
      food: { id: 4, name: "パスタ" },
    },
    {
      id: 5,
      feel_id: 9,
      food_id: 10,
      evaluation: 9,
      feel: { id: 9, name: "嬉しい" },
      food: { id: 10, name: "タピオカ" },
    },
  ]

  const [nowFeeling, setNowFeeling] = useState<string>("none")
  const [tableData, setTableData] = useState<Relation[]>([])
  //const [createTable, setCreateTable] = useState<JSX.Element[]>()

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
    data.sort((first, second) => {
      if (first.evaluation > second.evaluation) {
        return -1
      } else if (first.evaluation < second.evaluation) {
        return 1
      } else return 0
    })
    setTableData(data)
  }, [nowFeeling])

  const onChangeFeel = useCallback(
    (e: any) => {
      console.log(e)
      setNowFeeling(e)
    },
    [displayData],
  )
  /*  const rows = useCallback(() => {
    console.log(tableData)
    setCreateTable(
      tableData.map(element => (
        <tr key={element.food.name}>
          <td>{element.food.name}</td>
          <td>{element.evaluation}</td>
        </tr>
      )),
    )
  }, [tableData]) */

  useEffect(() => displayData(), [nowFeeling])
  // useEffect(() => rows(), [tableData])

  return (
    <div className='mx-auto max-w-800px w-80vw'>
      <Text className='mb-4 text-20px'>気分にあったオススメ料理</Text>
      <Select
        className='m-4 max-w-250px'
        label='あなたの気分を選んでください'
        placeholder='ここをクリックして選択'
        data={selectFeeling}
        // onChange={e => {
        //   setNowFeeling(e)
        // }}
        onChange={e => onChangeFeel(e)}
      />

      <Table
        striped
        className='border-separate border-2 m-4 max-w-800px table-auto'
      >
        <thead>
          <tr>
            <th>食べ物</th>
            <th>評価</th>
          </tr>
        </thead>
        <tbody>
          {/*  {createTable} */}
          {tableData.map(element => (
            <tr key={element.id}>
              <td>{element.food.name}</td>
              <td>{element.evaluation}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
