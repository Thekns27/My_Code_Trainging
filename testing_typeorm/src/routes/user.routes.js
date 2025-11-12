import { Router } from "express";
const userRouter = Router();
import {} from '../controllers/user.controller.js'

userRouter.get("/");
userRouter.get("/:id");
userRouter.post('/');

export default userRouter;
