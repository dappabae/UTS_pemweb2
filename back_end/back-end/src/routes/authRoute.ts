import { Router } from "express";
import { login, register } from "../controllers/authController.js";

const router = Router();

// POST login user
router.post("/login", login);
// POST register user
router.post("/register", register); 

export default router;