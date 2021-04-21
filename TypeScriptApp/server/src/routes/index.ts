import { Router } from "express"
import { getLeaders, addLeader} from "../controllers/leadersBoard"

const router: Router = Router()

router.get("/leaders-board", getLeaders)

router.post("/add-leader", addLeader)

export default router