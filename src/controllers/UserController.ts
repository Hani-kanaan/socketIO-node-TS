import express from "express";
import { UserModel } from "../db/User";
class UserController {
  getAllUsers = async (request: any, response: any) => {
    try {
      const users = await UserModel.find();
      return response.status(200).json(users);
    } catch (error) {
      return response.sendStatus(400);
    }
  };

  getUser = async (request: any, response: any) => {
    try {
      const { id } = request.params;
      const user = await UserModel.findById(id);
      return response.status(200).json(user);
    } catch (error) {
      return response.sendStatus(400);
    }
  };

  createUser = async (request: any, response: any) => {
    try {
      const { firstName, lastName, email, number, password } = request.body;

      const user = new UserModel({
        firstName,
        lastName,
        email,
        number,
        password,
      });
      await user.save();
      return response
        .status(200)
        .json({ message: " user created", data: user });
    } catch (error) {
      return response.sendStatus(400);
    }
  };

  updateUser = async (request: any, response: any) => {
    try {
      const { id } = request.params;
      const { firstName, lastName, email, number, password } = request.body;
      const user = await UserModel.findById(id);
      if (user) {
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.number = number;
        user.password = password;

        await user.save();
        return response.status(200).json({ message: "user updated" });
      }
      return response.status(404).json({ message: "user not found" });
    } catch (error) {
      return response.sendStatus(400);
    }
  };

  deleteUser = async (request: any, response: any) => {
    try {
      const { id } = request.params;
      const user = await UserModel.findByIdAndDelete({ _id: id });
      return response.status(200).json(`user deleted`);
    } catch (error) {
      return response.sendStatus(400);
    }
  };
}
export default UserController;
