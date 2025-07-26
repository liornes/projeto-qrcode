import prompt from "prompt";
import mainSchemaPrompt from "./prompts-schema/prompt-schema-main.js";
import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

function main() {
    prompt.get(mainSchemaPrompt, async (err, choose) => {
        if(err) console.log(err);

        if(choose.select == 1) createQRCode();
        if(choose.select == 2) createPassword();
    });

    prompt.start();
}

main();