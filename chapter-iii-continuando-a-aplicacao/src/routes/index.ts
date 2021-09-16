import { Router } from "express";
import { authenticateRoutes } from "./authenticate.routes";

import { categoriesRoutes } from "./categories.routes";
import { specificationRoutes } from "./specifications.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationRoutes);
router.use("/users", usersRoutes);
router.use(authenticateRoutes);

export { router };
