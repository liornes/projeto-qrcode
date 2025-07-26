import chalk from "chalk";

const mainSchemaPrompt = [
    {
        name: "select",
        description: chalk.yellow.bold("Escolha a ferramenta (1- QRCode ou 2- Password)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        required: true
    }
]

export default mainSchemaPrompt;