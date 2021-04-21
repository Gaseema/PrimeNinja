import express, { Router } from "express"
import { getLeaders, addLeader } from "../controllers/leadersBoard"

const router: Router = Router()
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/leaders-board", getLeaders)

router.post("/add-leader", addLeader)

export default router