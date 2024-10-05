import express from "express";
import { Authenticated } from "../Middlewares/auth.js";
import { login, profile, register, users } from "../Controllers/user.js";
const router = express.Router();



router.post('/register', register)
//login user
router.post('/login',login)

//get all users
router.get('/all',users)

//get user profile
router.get('/profile', Authenticated ,profile)

export default router;