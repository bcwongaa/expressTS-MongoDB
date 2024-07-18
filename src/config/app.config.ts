import dotenv from "dotenv";
dotenv.config();

export const CORS_CONFIG = {
    origin: ["http://localhost:4000", "http://localhost:3000"],
    credentials: true,
};

export const PORT = process.env.PORT;
