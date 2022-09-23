import { Feel } from "./feel"
import { Food } from "./foo"

export type Relation = {
  id: number
  feel_id: number
  food_id: number
  evaluation: number
  feel: Feel
  food: Food
}
