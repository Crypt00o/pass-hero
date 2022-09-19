import { Creds } from "../types/Creds";
import { SessionParse } from "../types/SessionParse";
import { myErrorLogger } from "./errorLogger";
const sessionParser = (line: string): SessionParse | false => {
    try {
        const sessionParamsRegex = /account='([^']*)'|alias='([^']*)'|length='([^']*)'|password='([^']*)'|setaccount='([^']*)'|setpassword='([^']*)'|setalias='([^']*)'/g;
        const option: string = line.split(" ")[0];
        const valueRegex = /'([^']*)'/g;
        const params = line.match(sessionParamsRegex);
        let data: Creds = {};
        let updateData: Creds = {};

        if (!["create", "search", "delete", "exit", "list", "help", "update"].includes(option.toLowerCase())) {
            return false;
        }
        if (params == null) {
            return { data: {}, option: option, updateData: {} };
        }
        if (params != null) {
            for (let i in params) {

                if (params[i].split('=')[0] == 'account') {
                    data.account = (params[i].match(valueRegex) as RegExpMatchArray)[0].replace(/'/g, '');
                }
                if (params[i].split('=')[0] == 'password') {

                    data.password = (params[i].match(valueRegex) as RegExpMatchArray)[0].replace(/'/g, '');
                }
                if (params[i].split('=')[0] == 'alias') {
                    data.alias = (params[i].match(valueRegex) as RegExpMatchArray)[0].replace(/'/g, '');
                }

                if (params[i].split('=')[0] == "length") {
                    if (parseInt((params[i].match(valueRegex) as RegExpMatchArray)[0].replace(/'/g, '')) > 0) {
                        data.password_length = parseInt((params[i].match(valueRegex) as RegExpMatchArray)[0].replace(/'/g, ''));
                    }
                }
                if (params[i].split('=')[0] == 'setalias') {
                    updateData.alias = (params[i].match(valueRegex) as RegExpMatchArray)[0].replace(/'/g, '');
                }
                if (params[i].split('=')[0] == 'setaccount') {
                    updateData.account = (params[i].match(valueRegex) as RegExpMatchArray)[0].replace(/'/g, '');
                }
                if (params[i].split('=')[0] == 'setpassword') {
                    updateData.password = (params[i].match(valueRegex) as RegExpMatchArray)[0].replace(/'/g, '');
                }


            }

        }

        return { data: data, option: option, updateData: updateData };


    }
    catch (err) {
        console.log("[-] Error While Parse Params");
        myErrorLogger(err);
        return false;
    }
};
export { sessionParser }


