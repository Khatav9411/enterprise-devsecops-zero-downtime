const logger=require("./config/logger");
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const routes = require('./routes');
const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use((req,res,next)=>{

    logger.info(`${req.method} ${req.url}`);

    next();

});



app.use(helmet());

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use('/', routes);

app.use(notFound);

app.use(errorHandler);

module.exports = app;