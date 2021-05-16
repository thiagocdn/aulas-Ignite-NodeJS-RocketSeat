import { Request, Response } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
  private createSpecificationUseCase: CreateSpecificationUseCase;
  constructor(createSpecificationUseCase: CreateSpecificationUseCase) {
      this.createSpecificationUseCase = createSpecificationUseCase;
  }

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;
    
    this.createSpecificationUseCase.execute({name, description});

    return response.status(201).send();
  }
}

export { CreateSpecificationController };