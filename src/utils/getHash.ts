import CryptoJS from "crypto-js";

function getHash() {
    const now = new Date().getTime();
    return {
        ts: now,
        hash: CryptoJS.MD5(`${now}${process.env.REACT_APP_MARVEL_PRIVATE_API_KEY}${process.env.REACT_APP_MARVEL_PUBLIC_API_KEY}`).toString(),
    }
}

export { getHash };
