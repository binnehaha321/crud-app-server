require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import connectDB from "./config/connectDB";
import cors from "cors";

let app = express();
app.use(cors({ origin: true }));
app.use(bodyParser.urlencoded({ extended: true }));

//config view Engine
configViewEngine(app);

//init all web routes
initWebRoutes(app);

connectDB();

let port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running at the port ${port}`);
});
