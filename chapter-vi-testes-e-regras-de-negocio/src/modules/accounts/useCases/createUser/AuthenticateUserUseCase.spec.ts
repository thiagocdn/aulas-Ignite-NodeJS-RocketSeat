import { AppError } from "../../../../shared/errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { AuthenticateUserUseCase } from "../authenticateUser/AuthenticateUserUseCase";
import { CreateUserUseCase } from "./CreateUserUseCase";

let createUserUseCase: CreateUserUseCase;
let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;

describe("Authenticate User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory
    );
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it("Should be able to authenticate an user", async () => {
    const user: ICreateUserDTO = {
      driver_license: "123456",
      email: "user@test.com",
      password: "123456",
      name: "User Test",
    };
    await createUserUseCase.execute(user);

    const authenticated = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(authenticated).toHaveProperty("token");
  });

  it("Should not be able to authenticate a non existent user", async () => {
    const user: ICreateUserDTO = {
      driver_license: "123456",
      email: "user@test.com",
      password: "123456",
      name: "User Test",
    };
    await createUserUseCase.execute(user);

    expect(async () => {
      await authenticateUserUseCase.execute({
        email: "nonexisting@test.com",
        password: user.password,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("Should not be able to authenticate an user with wrong password", async () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: "123456",
        email: "user@test.com",
        password: "123456",
        name: "User Test",
      };

      await createUserUseCase.execute(user);

      await authenticateUserUseCase.execute({
        email: "user@test.com",
        password: "1234",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
