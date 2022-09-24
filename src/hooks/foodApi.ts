import { useCallback } from "react"
import { Food } from "../types/foo"
import { postApi } from "../utils/api"
import { useGetApi } from "./useApi"

export const useFoodApi = () => {
  const { data: foods, mutate: foodMutate } = useGetApi("/food")

  const createFood = useCallback(
    async (name: string) => {
      try {
        const res = await postApi<Food[]>("/food", { name: name })
        if (!res || !res.length) {
          return
        }
        console.log("new food", res, res[0])
        foodMutate([...foods, res[0]], false)
      } catch (e) {
        console.error(e)
      }
    },
    [foodMutate, foods],
  )

  return { createFood }
}
