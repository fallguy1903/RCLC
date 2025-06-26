import express from "express";
import { getEvents, postEvent } from "../controller/eventController.js";
import upload from "../middleware/multer.js";

const router = express.Router();

router.post("/postEvents",upload.single('image'),postEvent)
router.get("/getEvents",getEvents)


export default router;