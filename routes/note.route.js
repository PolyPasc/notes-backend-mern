import express from "express";
import { authenticateToken } from "../utils.js";
import {
  addNote,
  deleteNote,
  editNote,
  getAllNotes,
} from "../controller/note.controller.js";

const router = express.Router();

router.post("/note", authenticateToken, addNote);
router.put("/note/:noteId", authenticateToken, editNote);
router.get("/note", authenticateToken, getAllNotes);
router.delete("/note/:noteId", authenticateToken, deleteNote);

export default router;
