import express from "express";
import { getEvents, postEvent } from "../controller/eventController.js";

const router = express.Router();

router.post("/postEvents",postEvent)
router.get("/getEvents",getEvents)


export default router;