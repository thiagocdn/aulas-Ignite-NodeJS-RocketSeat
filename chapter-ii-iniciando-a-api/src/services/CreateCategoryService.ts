import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}


class CreateCategoryService {
  private categoriesRepository: CategoriesRepository
  constructor(categoriesRepository: CategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if(categoryAlreadyExists)
      throw new Error("Category already exists!");
    
    this.categoriesRepository.create({name, description});
  }
}

export { CreateCategoryService };