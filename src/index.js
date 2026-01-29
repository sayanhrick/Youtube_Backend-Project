// require("dotenv").config({path: "./.env"});

import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import connectDB from "./db/index.js";

connectDB();






/*
import express from "express";
const app = express();


(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", () => {
            console.log("Failed to connect to MongoDB");
        });
        console.log("Connected to MongoDB successfully!");

        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server is running on port ${process.env.PORT || 3000}`);
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
})();


*/

