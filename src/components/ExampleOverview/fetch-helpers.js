import {kontoliste} from "./kontoliste";


export function getKontoliste(ok) {
    if (ok === true) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve(kontoliste), Math.random() * 10000)
        })
    }
    return null
}