import { Router } from "express";
import { URLRecordController } from "../controllers/UrlRecords.js";

function createUrlRecordsRoute({UrlRecordModel}) {
    const urlRecordsRouter = Router()

    const urlRecordController = new URLRecordController({UrlRecordModel})

    urlRecordsRouter.post('/', urlRecordController.createShortURL)

    urlRecordsRouter.get('/r/:shortUrl', urlRecordController.redirectToUrl);

    urlRecordsRouter.get('/check', urlRecordController.checkUrl);

    return urlRecordsRouter;
}

export default createUrlRecordsRoute;