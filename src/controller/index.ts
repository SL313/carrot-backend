import express from "express";
//import schoolController from "./school.controller";
import articleController from "./trade.controller";

const router = express.Router();

router.use("/trade", articleController);

export default router;
