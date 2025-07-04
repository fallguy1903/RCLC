import express from "express";
import { getUsers, removeUser } from "../controller/ManageUsersController.js";

const router = express.Router();

router.get("/getUsers",getUsers);
router.delete("/removeUser/:memberId",removeUser);

export default router;