import { lookup } from "node:dns/promises"
import { URL } from "node:url";

export async function checkValidUrl(input) {
    try {
        const parsed = new URL(input);
        const addresses = await lookup(parsed.protocol ? parsed.host : parsed.pathname)
    
        return Boolean(addresses);
    } catch (error) {
        console.log(error)
        return false
    }
}