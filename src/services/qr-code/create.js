import prompt from "prompt";
import qrCodeSchemaPrompt from "../../prompts-schema/prompt-schema-qrcode.js";
import handle from "./handle.js";

function createQRCode() {
    prompt.get(qrCodeSchemaPrompt, handle);
    prompt.start();
}

export default createQRCode;