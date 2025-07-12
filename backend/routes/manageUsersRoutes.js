import express from "express";
import { editUser, getUser, getUsers, removeUser } from "../controller/ManageUsersController.js";

const router = express.Router();

router.get("/getUsers",getUsers);
router.delete("/removeUser/:memberId",removeUser);
router.get("/getUser/:memberId",getUser)
router.put("/editUser/:memberId",editUser)

export default router;