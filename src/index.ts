import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import * as swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../swagger.json';
const app = express();

dotenv.config();

const port = 8080;
import customerRoutes from "./models/items/routes";
app.use(express.json());
app.use(cors({origin: process.env.FRONTEND_URL}));
app.use("/", customerRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => console.log(`Server is running on port ${port}`));