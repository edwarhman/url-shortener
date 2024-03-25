import express from "express";
import mongoose from "mongoose";
import config from "./config/index.js";
import createUrlRecordsRoute from "./routes/UrlRecords.js";
import UrlRecordModel from "./models/UrlRecord.js";

const app = express();

const port = 3000;

app.use(express.json())

app.use('/url', createUrlRecordsRoute({ UrlRecordModel}))

const db = await mongoose.connect(config.databaseUrl)
console.log('Connected to database');

app.listen(port, () => {
    console.log("listen on port " + port);
});