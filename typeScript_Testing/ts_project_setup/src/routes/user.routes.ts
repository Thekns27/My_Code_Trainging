import { Router } from "express";
import {
  login,
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} from "../controller/user.controller";
import { authenticate, authorize } from "../middleware/auth.middleware";

const router = Router();

router.post("/login",authenticate,authorize(["admin","user"]) ,login);
router.get("/users", authenticate, authorize(["admin"]), getAllUsers);
router.get("/users/:id", authenticate, authorize(["admin"]), getUserById);
router.post("/users", authenticate, authorize(["admin"]), createUser);
router.put("/users/:id", authenticate, authorize(["admin"]), updateUser);
router.delete("/users/:id", authenticate, authorize(["admin"]), deleteUser);

export default router;
