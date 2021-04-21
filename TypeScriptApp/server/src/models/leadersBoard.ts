import { ILeadersBoard } from "./../types/leadersBoard"
import { model, Schema } from "mongoose"

const leaderBoardSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    score: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
)

export default model<ILeadersBoard>("LeadersBoad", leaderBoardSchema)