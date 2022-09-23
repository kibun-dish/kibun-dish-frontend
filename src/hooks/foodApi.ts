import { useCallback } from "react"
import { postApi } from "../utils/api"
import { useGetApi } from "./useApi"

export const useFoodApi = () => {
  const { data: foods, mutate: foodMutate } = useGetApi("/foods")

  const createFood = useCallback(
    async (name: string) => {
      try {
        const res = await postApi("/foods", { foods: { name } })
        if (!res) {
          return
        }
        foodMutate([...foods, res], false)
      } catch (e) {
        console.error(e)
      }
    },
    [foodMutate, foods],
  )

  return { createFood }
}
