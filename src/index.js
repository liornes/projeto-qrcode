import prompt from "prompt";
import mainPrompt from "./prompts/prompt-main.js";
import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

function main() {
    prompt.get(mainPrompt, async (error, choose) => {
        if(choose.select == 1) createQRCode();
        if(choose.select == 2) createPassword();
    })
}

main();