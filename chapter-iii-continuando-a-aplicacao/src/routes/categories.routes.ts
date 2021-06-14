import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController'; 
import { listCategoriesController } from '../modules/cars/useCases/listCategories';
import { importCategoriesController } from '../modules/cars/useCases/importCategories';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
})

const createCategoryController = new CreateCategoryController()

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  return importCategoriesController.handle(request, response);
});

export { categoriesRoutes };
