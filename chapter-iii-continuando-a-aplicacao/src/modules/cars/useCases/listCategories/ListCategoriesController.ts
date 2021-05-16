import { Request, Response } from "express";

import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoriesController {
  private listCategoriesUseCase: ListCategoriesUseCase;
  constructor(listCategoriesUseCase: ListCategoriesUseCase) {
    this.listCategoriesUseCase = listCategoriesUseCase;
  }
  handle(_: Request, response: Response): Response {
    const allCategories = this.listCategoriesUseCase.execute();
  
    return response.json(allCategories);
  }
}

export { ListCategoriesController };
