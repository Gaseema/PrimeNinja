import { Response, Request } from "express"
import { ILeadersBoard } from "./../../types/leadersBoard"
import LeadersBoad from "../../models/leadersBoard"

const getLeaders = async (req: Request, res: Response): Promise<void> => {
  try {
    const leaders: ILeadersBoard[] = await LeadersBoad.find()
    res.status(200).json({ leaders })
  } catch (error) {
    throw error
  }
}

const addLeader = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<ILeadersBoard, "name" | "score">

    const leader: ILeadersBoard = new LeadersBoad({
      name: body.name,
      score: body.score,
    })

    const newLeader: ILeadersBoard = await leader.save()
    const allLeaders: ILeadersBoard[] = await LeadersBoad.find()

    res
      .status(201)
      .json({ message: "Leader added", leader: newLeader, leaders: allLeaders })
  } catch (error) {
    throw error
  }
}
export { getLeaders, addLeader}