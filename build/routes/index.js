"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = __importDefault(require("../controllers/UserController"));
const router = express_1.default.Router();
const usercontroller = new UserController_1.default();
router.get('/user', usercontroller.getAllUsers);
router.get('/user/:id', usercontroller.getUser);
router.post('/user', usercontroller.createUser);
router.put('/user/:id', usercontroller.updateUser);
router.delete('/user/:id', usercontroller.deleteUser);
exports.default = router;
