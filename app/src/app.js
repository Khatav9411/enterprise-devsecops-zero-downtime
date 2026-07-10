const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const routes = require("./routes");
const { swaggerUi, specs } = require("./config/swagger");

const app = express();

app.use(helmet());
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use("/", routes);

module.exports = app;