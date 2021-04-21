import { Document } from "mongoose"

export interface ILeadersBoard extends Document {
  name: string
  score: number
}