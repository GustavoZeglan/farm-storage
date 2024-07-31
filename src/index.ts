import express from "express";
import * as swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../swagger.json';
const app = express();
const port = 3000;

import customerRoutes from "./models/items/routes";

app.use(express.json());
app.use("/", customerRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => console.log(`Server is running on port ${port}`));