import { Router } from "express";
import { connectDb } from "../../config/db.js";
import User from "./model.js";
import bcrypt from "bcryptjs";

const router = Router();
const bcryptSalt = bcrypt.genSaltSync();

router.get("/", async (req, res) => {
  connectDb();

  try {
    const userDoc = await User.find();

    res.json(userDoc);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  connectDb();

  const { name, email, passaword } = req.body;
  const encryptedPassword = bcrypt.hashSync(passaword, bcryptSalt);

  try {
    const newUserDoc = await User.create({
      name,
      email,
      passaword: encryptedPassword,
    });

    res.json(newUserDoc);
  } catch (erro) {
    res.status(500).json(error);
  }
});

export default router;
