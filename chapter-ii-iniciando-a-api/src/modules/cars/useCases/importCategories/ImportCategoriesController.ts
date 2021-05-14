import { Request, Response } from "express";
import { ImportCategoriesUseCase } from "./ImportCategoriesUseCase";

class ImportCategoriesController {
  private importCategoriesUseCase: ImportCategoriesUseCase;
  constructor(importCategoriesUseCase: ImportCategoriesUseCase) {
    this.importCategoriesUseCase = importCategoriesUseCase;
  }

  handle(request: Request, response: Response): Response {

    const { file } = request;

    this.importCategoriesUseCase.execute(file)

    return response.send();
  }
}

export { ImportCategoriesController };