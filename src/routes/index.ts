import express from "express";
import path from "path";
import UserController from "../controllers/UserController";
const router = express.Router();
const usercontroller = new UserController();
router.get('/user', usercontroller.getAllUsers);
router.get('/user/:id', usercontroller.getUser);
router.post('/user', usercontroller.createUser);
router.put('/user/:id', usercontroller.updateUser);
router.delete('/user/:id', usercontroller.deleteUser);
router.post('/login', usercontroller.loginUser);

export default router;
