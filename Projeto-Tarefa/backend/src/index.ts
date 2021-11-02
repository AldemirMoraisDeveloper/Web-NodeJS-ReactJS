import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from 'cors';
import routes from "./routes";
require("dotenv").config();

const app = express()
const config: any = {
    "type": "postgres",
    "host": "tai.db.elephantsql.com",
    "port": 5432,
    "username": "whbaqxnp",
    "password": "bOapbfsblCUL-FjrhuD9iWgEh2oYWCAC",
    "database": "whbaqxnp",
    "synchronize": true,
    "logging": false,
    "entities": [
       "src/entity/**/*.ts"
    ],
    "migrations": [
       "src/migration/**/*.ts"
    ],
    "subscribers": [
       "src/subscriber/**/*.ts"
    ],
    "cli": {
       "entitiesDir": "src/entity",
       "migrationsDir": "src/migration",
       "subscribersDir": "src/subscriber"
    }
 } 
createConnection(config)
 
app.use(cors())
app.use(bodyParser.json())
app.use(routes)
 
app.listen(3333)


