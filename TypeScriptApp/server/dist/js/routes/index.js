"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const leadersBoard_1 = require("../controllers/leadersBoard");
const router = express_1.Router();
router.get("/leaders-board", leadersBoard_1.getLeaders);
router.post("/add-leader", leadersBoard_1.addLeader);
exports.default = router;
