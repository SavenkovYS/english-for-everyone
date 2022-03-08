import express, { Application } from 'express';
import bodyParser from "body-parser";

import sequelize from "./utils/database";

const app: Application = express();

app.use(bodyParser.json());

sequelize
    .authenticate()
    .then(() => {
        console.log('connected to db');
        app.listen(3300);
    })
    .catch(err => console.log(err));

