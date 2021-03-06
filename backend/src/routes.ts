/**
* IMPORT MODULES
*/
import { Router } from 'express';
const routes = Router();
import './lib/connect';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './api/swagger'; // Json swagger description

/** 
 * import routes
 */
import UserRoutes from './routes/User';
import PostRoutes from './routes/Post';

/**
* Rota principal
*/
routes.get("/", (req, res) =>  res.send("💻 64 - API ❤️ - API"));


/**
* SWAGGER ROUTER
*/
routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/**
* User routes
*/
routes.use("/v1/user", UserRoutes);
/**
* Post routes
*/
routes.use("/v1/post", PostRoutes);


export default routes;