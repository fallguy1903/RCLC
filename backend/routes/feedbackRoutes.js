import express from "express";
import { getFeedback, PostFeedback } from "../controller/feedbackController.js";

const router = express.Router();

router.post("/postFeedback",PostFeedback);
router.get("/getFeedback",getFeedback);

export default router;