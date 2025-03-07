import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { fullName, email, password } = req.body;

  if (!fullName) {
    return res
      .status(400)
      .json({ error: true, message: "Full name is required" });
  }
  if (!email) {
    return res.status(400).json({ error: true, message: "E-mail is required" });
  }
  if (!password) {
    return res
      .status(400)
      .json({ error: true, message: "Password is required" });
  }

  try {
    const isUserValid = await User.findOne({ email });

    if (isUserValid) {
      return res
        .status(400)
        .json({ error: true, message: "User already exist" });
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    const accessToken = jwt.sign({ newUser }, process.env.TOKEN_SECRET, {
      expiresIn: "60m",
    });

    res.status(201).json({
      error: false,
      newUser,
      accessToken,
      message: "User Registred Successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({ error: true, message: "E-mail is required" });
  }
  if (!password) {
    return res
      .status(400)
      .json({ error: true, message: "Password is required" });
  }

  try {
    const validUser = await User.findOne({ email });

    if (!validUser) {
      return res.status(400).json({ message: "User not found" });
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password);

    if (!validPassword) {
      return res.status(401).json({ message: "Wrong Credentials" });
    }

    const token = jwt.sign({ id: validUser._id }, process.env.TOKEN_SECRET, {
      expiresIn: "60m",
    });

    res.status(200).json({
      error: false,
      token,
      email,
      message: "Login Successful!",
    });
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  const { id } = req.user;

  const isUser = await User.findOne({ _id: id });

  if (!isUser) {
    return res.status(401).json({
      error: true,
      message: "",
    });
  }
  return res.status(200).json({
    error: false,
    user: { fullName: isUser.fullName, email: isUser.email },
    message: "",
  });
};

export const signout = async (req, res, next) => {
  try {
    res.status(200).json({
      error: false,
      message: "User logged out successfully",
    });
  } catch (error) {
    next(error);
  }
};
