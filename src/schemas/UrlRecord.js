import mongoose from "mongoose";

const UrlRecordSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    shortUrl: {
        type: String,
        required: true,
        unique: true,
    },
    clicks: {
        type: Number,
        default: 0
    }
});

const UrlRecord = mongoose.model('LinkRecord', UrlRecordSchema);

export default UrlRecord;