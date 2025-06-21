import express from "express";
import { bloodRequest,showBloodRequests } from "../controller/BloodRequestController.js";

const router = express.Router();

router.post("/bloodRequest",bloodRequest);
router.get("/showBloodRequests",showBloodRequests);

export default router;