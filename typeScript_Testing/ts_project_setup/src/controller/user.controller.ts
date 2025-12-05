import { json } from 'body-parser';
import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../config/database";
import { User } from "../model/user";
import { generateToken } from "../middleware/auth.middleware";

const userRepo = AppDataSource.getRepository(User);

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  const user = await userRepo.findOneBy({ email });

  if (!user || user.password !== password || user.email !== email) {
    return res.status(401).json({ message: "Invalid input" });
  }
  const token = generateToken(user);
  res.json({ token: "Bearer " + token });
}

export async function getAllUsers(req: Request, res: Response) {
  const users = await userRepo.find();
  res.json({ message: "all users", users });
}

export async function getUserById(req: Request, res: Response) {
  const userId = Number(req.params.id);

  try {
    const user = await userRepo.findOneBy({ id: userId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json(user);
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
}

export async function createUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { username, email, password, role } = req.body;

    const existingUser = await userRepo.findOneBy({ email });
    if (existingUser) {
      return res.status(400).json({ message: "email is already exists" });
    }
    if (!username || !email || !password || !role) {
      throw new Error("username, email, password and role are required");
    }
    const newUser = userRepo.create({ username, email, password, role });
    userRepo.save(newUser);
    return res
      .status(201)
      .json({ message: "User created successfully", newUser });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

export async function updateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id = Number(req.params.id);
  try {
    const user = await userRepo.findOneBy({ id });
    if (!id || !user) {
      return res.status(404).json({ message: "User not found" });
    }
    await userRepo.update(id, req.body);
    const updatedUser = await userRepo.findOneBy({ id });
    userRepo.save(updatedUser!);
    return res
      .status(200)
      .json({ message: "User updated successfully", updatedUser: updatedUser });
  } catch (error) {
    next(error);
  }
}

export async function deleteUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
console.log("Arrived!",req.params?.id)
  const id = Number(req.params.id);
  try {
    const user = await userRepo.findOneBy({ id });

    if (!id) {
      return res.status(400).json({ message: "User ID is required!" });
    }
    if (id !== user?.id) {
      return res.status(404).json({ message: "User not found" });
    }


    await userRepo.delete(id);
    return res
      .status(200)
      .json({ message: "User deleted successfully", deletedUser: user });
  } catch (error) {
    next(error);
  }
}

export default {
  login,
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
