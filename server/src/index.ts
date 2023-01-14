import express from 'express';
import cors from 'cors';
import { createConnection } from 'typeorm';
import {graphqlHTTP} from "express-graphql"
import { schema } from './Schema';
import { Users } from './Entities/Users';
import { Posts } from './Entities/Posts';

const port = 3001;
const main = async () =>{
	await createConnection({
		type: "mysql",
		database: "sern_social_special",
		username: "root",
		password: "",
		logging: true,
		synchronize: true,
		entities: [Users, Posts]
	})


	const app = express();
	app.use(express.json());
	app.use(cors());

	app.use("/graphql", graphqlHTTP({
		schema,
		graphiql: true
	}));


	app.listen(port, ()=>{
		console.log("Server connect success port ",port);
	});
}

main().catch((err) => {
	console.log(err);
})