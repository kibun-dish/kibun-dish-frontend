import { useCallback } from "react"
import { postApi } from "../utils/api"
import { useGetApi } from "./useApi"

export const useFeelApi = () => {
  const { data: feels, mutate: feelMutate } = useGetApi("/feels")

  const createFeel = useCallback(
    async (name: string) => {
      try {
        const res = await postApi("/feels", { feels: { name } })
        if (!res) {
          return
        }
        feelMutate([...feels, res], false)
      } catch (e) {
        console.error(e)
      }
    },
    [feelMutate, feels],
  )

  return { createFeel }
}
