import express from "express";
import {
  getUser,
  signin,
  signout,
  signup,
} from "../controller/auth.controller.js";
import { authenticateToken } from "../utils.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/signout", authenticateToken, signout);
router.get("/check/user", authenticateToken, getUser);

export default router;
