import inquirer = require('inquirer')
import * as readline from 'readline'
import * as path from 'path'
import * as fs from 'fs'

export class Cli {

    public init() {
        const question = [
            {
                type: 'rawlist',
                name: 'option',
                message: 'Please select one of following options',
                choices: [
                    'Read commands from File',
                    'Enter commands manually',
                    'Quit the application'
                ]
            }
        ]
        inquirer.prompt(question).then(answers => {
            if (answers.option === 'Read commands from File') {
                this.readFromFile()
            } else if (answers.option === 'Enter commands manually') {
                this.userInput()
            }
        })
    }

    public readFromFile() {
        const directoryPath = path.join(__dirname, '../', 'files-input')
        fs.readdir(directoryPath, (err, files) => {
            if (err) {
                return console.log('Folder not found: ' + err)
            } else {
                const question = [{
                    type: 'list',
                    name: 'filename',
                    message: 'Please select the input file',
                    choices: files
                }]
                inquirer.prompt(question).then(answers => {
                    console.log(answers.filename)
                })
            }
        })
    }

    public userInput() {
        const commands: string[] = []
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
        rl.on('line', (cmd) => {
            commands.push(cmd)
        })
        rl.on('SIGCONT', () => {
            // `prompt` will automatically resume the stream
        });
        rl.on('SIGINT', () => {
            rl.question('Are you sure you want to exit? ', (answer) => {
                if (answer.match(/^y(es)?$/i)) {
                    this.init()
                }
            })
        })
    }
}