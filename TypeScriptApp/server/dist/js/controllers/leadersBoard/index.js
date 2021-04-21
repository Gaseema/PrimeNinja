"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addLeader = exports.getLeaders = void 0;
const leadersBoard_1 = __importDefault(require("../../models/leadersBoard"));
const getLeaders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const leaders = yield leadersBoard_1.default.find();
        res.status(200).json({ leaders });
    }
    catch (error) {
        throw error;
    }
});
exports.getLeaders = getLeaders;
const addLeader = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const leader = new leadersBoard_1.default({
            name: body.name,
            score: body.score,
        });
        const newLeader = yield leader.save();
        const allLeaders = yield leadersBoard_1.default.find();
        res
            .status(201)
            .json({ message: "Leader added", leader: newLeader, leaders: allLeaders });
    }
    catch (error) {
        throw error;
    }
});
exports.addLeader = addLeader;
