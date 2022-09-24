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
import { useGetApi } from "../hooks/useApi"
import { Feel } from "../types/feel"

export const ProposeFood: FC = () => {
  const { data: relations2, mutate: relationsMutate } =
    useGetApi<Relation[]>("/relation")
  const { data: feels, mutate: feelMutate } = useGetApi<Feel[]>("/feel")

  // const selectFeeling = feels.map(element => {
  //   return { value: element.id, label: element.name }
  // })

  // console.log(selectFeeling)
  /* [
    { value: "悲しい", label: "悲しい" },
    { value: "嬉しい", label: "嬉しい" },
    { value: "二日酔い", label: "二日酔い" },
    { value: "怒り", label: "怒り" },
  ] */

  //const relation: Relation[] = relations2
  /* [
      {
        id: 1,
        evaluation: 5,
        feel: { id: 1, name: "悲しい" },
        food: { id: 1, name: "うどん" },
      },
      {
        id: 2,
        evaluation: 5,
        feel: { id: 6, name: "悲しい" },
        food: { id: 8, name: "冷麺" },
      },
      {
        id: 3,
        evaluation: 3,
        feel: { id: 2, name: "悲しい" },
        food: { id: 2, name: "ラーメン" },
      },
      {
        id: 4,
        evaluation: 2,
        feel: { id: 7, name: "悲しい" },
        food: { id: 4, name: "パスタ" },
      },
      {
        id: 5,
        evaluation: 9,
        feel: { id: 9, name: "嬉しい" },
        food: { id: 10, name: "タピオカ" },
      },
    ]
 */

  const [nowFeeling, setNowFeeling] = useState<number>(0)
  const [tableData, setTableData] = useState<Relation[]>([])

  const displayData = useCallback(() => {
    if (!relations2) {
      return
    }
    const data: Relation[] = relations2.filter(element => {
      return element.feel.id == nowFeeling
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

  useEffect(() => displayData(), [nowFeeling])

  return (
    <div className='mx-auto max-w-800px w-80vw'>
      <Text className='m-4 text-sky-400'>気分にあったオススメ料理</Text>
      {feels && (
        <Select
          className='m-4 max-w-250px'
          label='あなたの気分を選んでください'
          placeholder='ここをクリックして選択'
          // data={selectFeeling}
          data={feels.map(food => {
            return { value: food.id, label: food.name }
          })}
          onChange={e => onChangeFeel(e)}
        />
      )}

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
