import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export default(): CreateCategoryController => {
  const categoriesRepository = new CategoriesRepository()
  const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
  const createCategoryController = new CreateCategoryController(createCategoryUseCase);

  return createCategoryController;
}


