import { AppError } from "../../../../shared/errors/AppError";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Create category", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });

  it("Should be able to create a new category", async () => {
    const newCategory = {
      name: "Category Test",
      description: "Category description Test",
    };
    await createCategoryUseCase.execute(newCategory);

    const category = await categoriesRepositoryInMemory.findByName(
      newCategory.name
    );

    expect(category).toHaveProperty("id");
  });

  it("Should not be able to create a category with an already existing name", async () => {
    expect(async () => {
      const newCategory = {
        name: "Category Test",
        description: "Category description Test",
      };

      await createCategoryUseCase.execute(newCategory);

      await createCategoryUseCase.execute(newCategory);
    }).rejects.toBeInstanceOf(AppError);
  });
});
