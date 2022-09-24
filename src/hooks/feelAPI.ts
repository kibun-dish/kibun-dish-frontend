import { useCallback } from "react"
import { Feel } from "../types/feel"
import { postApi } from "../utils/api"
import { useGetApi } from "./useApi"

export const useFeelApi = () => {
  const { data: feels, mutate: feelMutate } = useGetApi("/feel")

  const createFeel = useCallback(
    async (name: string) => {
      try {
        const res = await postApi<Feel[]>("/feel", { name: name })
        if (!res || !res.length) {
          return
        }
        feelMutate([...feels, res[0]], false)
      } catch (e) {
        console.error(e)
      }
    },
    [feelMutate, feels],
  )

  return { createFeel }
}
