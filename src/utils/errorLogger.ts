//My Error Logger
import { repoUrl } from "./banner";
const myErrorLogger = (err: unknown): void => {
    console.log(`[-] Error This is May be a Bug Please Visit and Report This on   :\n\n ${repoUrl} \n\n `);
    console.log(`[!] Error : ${err}`);
};
export { myErrorLogger };