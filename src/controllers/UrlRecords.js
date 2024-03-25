import { checkValidUrl } from "../utils/checkers.js";
import { generateShortUrl } from "../utils/generator.js";

export class URLRecordController {
    constructor({UrlRecordModel}) {
        this.urlRecordModel = UrlRecordModel;
    }

    createShortURL = async (req, res) => {
        const { url } = req.body;

        const isValidUrl = await checkValidUrl(url)
        
        if(!isValidUrl) {
            return res.status(400).json({
                message: "Invalid URL"
            })
        }

        const urlRecord = await this.urlRecordModel.createUrlRecord({
            url,
            shortUrl: generateShortUrl()
        })

        res.status(201).json({
            message: "URL shortcut created successfully.",
            url: urlRecord,
        })
    }

    redirectToUrl = async (req, res) => {
        const { shortUrl } = req.params

        const urlRecord = await this.urlRecordModel.getUrlById(shortUrl)

        if(!urlRecord) {
            return res.status(404).json({
                message: "URL not found"
            })
        }

        res.redirect(urlRecord.url)
        
    }

    checkUrl = async (req, res) => {
        const { url } = req.body;

        const isValidUrl = await checkValidUrl(url)

        if(!isValidUrl) {
            return res.status(400).json({
                message: "Invalid URL"
            })
        }

        res.status(200).json({
            message: "URL is valid",
        })
    }
}