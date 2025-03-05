import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
// import routes
import authRouter from "./routes/auth.route.js";
import noteRouter from "./routes/note.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1", noteRouter);
app.get("/", (_, res) => {
  res.json({ data: "hello from backend" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// error handling
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Serer Error";

  return res.status(statusCode).json({
    error: true,
    statusCode,
    message,
  });
});
