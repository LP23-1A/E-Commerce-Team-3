import { NextFunction, Request, Response } from "express";
import { generateToken } from "./generate";
import { userModel } from "../model/user";
import bcrypt from 'bcrypt';

import dotenv from "dotenv"

dotenv.config()
const createUserMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password, phoneNumber, role ,address,zipCode,cardId,createdAt,updateAt} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
      phoneNumber,
      role,
      address,
      zipCode,
      cardId,
      createdAt,
      updateAt,
    });
    const savedUser = await newUser.save();

    const token = generateToken(savedUser._id);

    res.status(201).json({ user: savedUser, token });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


export {  createUserMiddleware };