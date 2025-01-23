import { getUsers } from "../controllers/UserController.js";
import express from "express";

const router = express.Router();

router.get("/api/users", getUsers);

export default router;

