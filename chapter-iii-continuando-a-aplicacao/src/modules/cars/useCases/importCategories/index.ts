import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoriesController } from "./ImportCategoriesController";
import { ImportCategoriesUseCase } from "./ImportCategoriesUseCase";

const categoriesRepository = null;
const importCategoriesUseCase = new ImportCategoriesUseCase(categoriesRepository)
const importCategoriesController = new ImportCategoriesController(importCategoriesUseCase);

export { importCategoriesController };