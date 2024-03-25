import UrlRecord from "../schemas/UrlRecord.js";

class UrlRecordModel {
    static async createUrlRecord(data) {
        const urlRecord = await new UrlRecord(data).save()

        return urlRecord
    }

    static async getUrlById(shortUrl) {
        return await UrlRecord.findOne({ shortUrl})
    }
}

export default UrlRecordModel