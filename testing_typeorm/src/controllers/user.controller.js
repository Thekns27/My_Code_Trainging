import userRepository from "../repositories/user.repository.js";
import { UserService } from "../services/user.service.js";
import { ApiError } from "../utils/errors.js";
import { apiSuccess } from "../utils/response.js";

const userService = new UserService();

export async function createUser(req, res, next) {
  // console.log (req.req);
  try {
    const { name, email, password, photo } = req.body;
    if (!name || !email || !password) {
      throw ApiError.badRequest("Please provide required fields");
    }
    const user = await userService.create(name, email, password, photo);
    return apiSuccess(res, 201, "User successfully created!", user);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

export async function deleteUser(req, res, next) {
  //console.log(req.req)
  try {
    const { id } = req.params;
    if (!id) {
      throw ApiError.badRequest("Please provide require fields");
    }
    const deleteUser = await userService.delete(id);
    return apiSuccess(res, 201, "User successfully deleted!", deleteUser);
  } catch (error) {
    next(error);
  }
}

export async function updateUser(req, res, next) {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;

    if (!id) {
      throw ApiError.badRequest("Please provide require fields");
    }
    const deleteUser = await userService.update(id, email, name, password);
    return apiSuccess(res, 201, "user successfully updated", deleteUser);
  } catch (error) {
    next(error);
  }
}

export async function find(req, res, next) {
  try {
    const { id } = req.params;
    const { search } = req.query;

    const users = await userService.find(id, search);
    return apiSuccess(res, 201, "user successfully featched!", users);
  } catch (error) {
    next(error);
  }
}
