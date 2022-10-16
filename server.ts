import express, { Request, Response } from "express";
import { sequelize } from './src/models';

const app = express();
const PORT:number = parseInt(process.env.PORT as string, 10) || 3001;
const HOST:string = process.env.HOST || 'localhost';

app.get("/", (req: Request, res: Response) => {
	res.send("Server is running");
});

app.listen(PORT,HOST,async () => {
	console.log(`Server Listening on ${HOST}:${PORT}`);

	await sequelize.authenticate()
	.then(async () => {
		console.log("connection success");
	})
	.catch((error: Error) => {
		console.error('Unable to connect to the database:', error);
	})
});

/** Swagger **/
const swaggerFile = require('./swagger/swagger-output');
const swaggerUi = require('swagger-ui-express')

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile, {explorer:true}))
