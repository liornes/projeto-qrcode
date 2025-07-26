import prompt from "prompt";
import mainPrompt from "./prompts/prompt-main.js";

function main() {
    prompt.get(mainPrompt, async (error, choose) => {
        if(choose.select == 1) console.log("Escolheu o QRCode");
        if(choose.select == 2) console.log("Escolheu o password");
    })
}

main();