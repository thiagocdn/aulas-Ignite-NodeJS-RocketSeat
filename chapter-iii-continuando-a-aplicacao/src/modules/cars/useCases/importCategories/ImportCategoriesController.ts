import { Request, Response } from "express";
import { container } from "tsyringe";
import { ImportCategoriesUseCase } from "./ImportCategoriesUseCase";

class ImportCategoriesController {

  handle(request: Request, response: Response): Response {
    const { file } = request;

    const importCategoriesUseCase = container.resolve(ImportCategoriesUseCase)

    importCategoriesUseCase.execute(file)

    return response.send();
  }
}

export { ImportCategoriesController };