"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../db/User");
class UserController {
    constructor() {
        this.getAllUsers = (request, response) => __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield User_1.UserModel.find();
                return response.status(200).json(users);
            }
            catch (error) {
                return response.sendStatus(400);
            }
        });
        this.getUser = (request, response) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = request.params;
                const user = yield User_1.UserModel.findById(id);
                return response.status(200).json(user);
            }
            catch (error) {
                return response.sendStatus(400);
            }
        });
        this.createUser = (request, response) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { firstName, lastName, email, number, password } = request.body;
                const user = new User_1.UserModel({
                    firstName,
                    lastName,
                    email,
                    number,
                    password,
                });
                yield user.save();
                return response
                    .status(200)
                    .json({ message: " user created", data: user });
            }
            catch (error) {
                return response.sendStatus(400);
            }
        });
        this.updateUser = (request, response) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = request.params;
                const { firstName, lastName, email, number, password } = request.body;
                const user = yield User_1.UserModel.findById(id);
                if (user) {
                    user.firstName = firstName;
                    user.lastName = lastName;
                    user.email = email;
                    user.number = number;
                    user.password = password;
                    yield user.save();
                    return response.status(200).json({ message: "user updated" });
                }
                return response.status(404).json({ message: "user not found" });
            }
            catch (error) {
                return response.sendStatus(400);
            }
        });
        this.deleteUser = (request, response) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = request.params;
                const user = yield User_1.UserModel.findByIdAndDelete({ _id: id });
                return response.status(200).json(`user deleted`);
            }
            catch (error) {
                return response.sendStatus(400);
            }
        });
    }
}
exports.default = UserController;
