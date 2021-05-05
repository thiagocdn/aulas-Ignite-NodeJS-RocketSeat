import { Router } from 'express';

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post('/categories', (request, response) => {
  const { name, description } = request.body;
  
  categories.push({
    name, description
  });
  
  return response.status(201).send();
});

export { categoriesRoutes };