import { Creds } from "../types/Creds";
import { myErrorLogger } from "./errorLogger";
const searchPasswords = (data: Array<Creds>, keySearch: Creds): Array<Creds> | false => {

    try {
        let founded: Array<Creds> = [];
        for (let i = 0; i < data.length; i++) {
            if (keySearch.account) {
                if (data[i].account == keySearch.account) {
                    founded.push(data[i]);
                }
            }
            if (keySearch.alias) {
                if (data[i].alias == keySearch.alias) {
                    founded.push(data[i]);
                }
            }
            if (keySearch.password) {
                if (data[i].password == keySearch.password) {
                    founded.push(data[i]);
                }
            }
        }
        return founded;

    }



    catch (err) {
        myErrorLogger(err);
        return false;
    }
};
export { searchPasswords };
