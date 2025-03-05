import Note from "../models/note.model.js";

export const addNote = async (req, res, next) => {
  const { title, content } = req.body;

  const { id } = req.user;

  if (!title) {
    return res.status(400).json({ error: true, message: "Title is required" });
  }

  if (!content) {
    return res
      .status(400)
      .json({ error: true, message: "Content is required" });
  }

  try {
    const note = new Note({
      title,
      content,
      userId: id,
    });

    await note.save();

    res.status(201).json({
      error: false,
      message: "Note added successfully",
      note,
    });
  } catch (error) {
    next(error);
  }
};

export const editNote = async (req, res, next) => {
  const note = await Note.findById(req.params.noteId);

  if (!note) {
    return res.status(404).json({ message: "Note not found", error: true });
  }

  if (req.user.id !== note.userId) {
    return res
      .status(401)
      .json({ message: "You can only update your own note!", error: true });
  }

  const { title, content } = req.body;

  if (!title && !content) {
    return res
      .status(400)
      .json({ error: false, message: "No changes provided" });
  }

  try {
    if (title) {
      note.title = title;
    }

    if (content) {
      note.content = content;
    }

    await note.save();

    res.status(200).json({
      error: false,
      message: "Note updated successfully",
      note,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllNotes = async (req, res, next) => {
  const userId = req.user.id;

  try {
    const notes = await Note.find({ userId: userId });

    res.status(200).json({
      error: false,
      message: "All notes retrived successfully",
      notes,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteNote = async (req, res, next) => {
  const noteId = req.params.noteId;

  const note = await Note.findOne({ _id: noteId, userId: req.user.id });

  if (!note) {
    return res.status(400).json({
      error: true,
      message: "Note not Found",
    });
  }

  try {
    await Note.deleteOne({ _id: noteId, userId: req.user.id });

    res.status(200).json({
      error: false,
      message: "Note deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
