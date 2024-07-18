import express, { Express, Request, Response } from "express";
// import cors from "cors";
import { CORS_CONFIG, PORT } from "./config/app.config";

const app: Express = express();

// app.use(cors(CORS_CONFIG));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// // app.use(CookieParser());
app.use(express.static("public"));
// // app.use("/", appRouter);
app.listen(PORT, async () => {
    console.log(`Listening on port ${PORT}...`);
});

export default app;
