export default function formatHeaders(str) {
    let l = str.split("\n");
    let headers = {};
    for (let i = 0; i < l.length; i++) {
        let line = l[i];
        let colon = line.indexOf(":");
        if (colon > 0) {
            let key = line.substring(0, colon).trim();
            let value = line.substring(colon + 1).trim();
            headers[key] = value;
        }
    }
    return headers;
}