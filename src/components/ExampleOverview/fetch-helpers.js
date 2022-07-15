import {kontoliste} from "./kontoliste";

export const getKontoliste = (ok, loadingTime) =>
    new Promise((resolve, reject) => {
        if (!ok) {
            return setTimeout(
                () => reject(new Error('Accounts not found')),
                loadingTime
            );
        }

        setTimeout(() => resolve(Object.values(kontoliste.accounts)), loadingTime);
    });