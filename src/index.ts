// Lodash library
import "reflect-metadata";
import { createConnection } from 'typeorm';
import express from "express";
import routes from './routes'

const port = 9999;

const app = express();

createConnection().then( ret =>{
})

app.use(express.json({limit: '500mb'}));
app.use(express.urlencoded({limit: '500mb'}));

app.use(express.json());
app.use(routes);

app.listen(port);






