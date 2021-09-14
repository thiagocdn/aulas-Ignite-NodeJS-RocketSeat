import { Router } from "express";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";

const usersRoutes = Router();

const createUserControler = new CreateUserController();

usersRoutes.post("/", createUserControler.handle);

export { usersRoutes };
