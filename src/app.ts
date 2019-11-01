import inquirer = require('inquirer')
import * as readline from 'readline'
import * as path from 'path'
import * as fs from 'fs'
import { Simulator } from './models/simulator'
import { Map } from './models/map'
import { parseCommand } from './models/commands/command.interface'

class CliApp {
    readonly options = [
        'Read commands from File',
        'Enter commands manually',
        'Quit the application'
    ]
    readonly filesInputPath = '../files-input'

    public start() {
        inquirer.prompt([
            {
                type: 'rawlist',
                name: 'option',
                message: 'Please select one of following options',
                choices: this.options
            }
        ]).then(answers => {
            if (answers.option === this.options[0]) {
                this.readFromFile()
            } else if (answers.option === this.options[1]) {
                this.userInput()
            }
            // Otherwise quit
        })
    }

    private readFromFile() {
        const directoryPath = path.join(__dirname, this.filesInputPath)
        fs.readdir(directoryPath, (err, files) => {
            if (err) {
                throw new Error('Folder not found: ' + err)
            } else if (files.length === 0) {
                throw new Error('Folder is empty')
            } else {
                const question = [{
                    type: 'list',
                    name: 'filename',
                    message: 'Please select the input file',
                    choices: files
                }]
                inquirer.prompt(question).then(answer => {
                    const simulator = new Simulator(new Map(5, 5))
                    const filepath = path.join(directoryPath, String(answer.filename))
                    const rl = readline.createInterface({
                        input: fs.createReadStream(filepath),
                        crlfDelay: Infinity
                    })
                    rl.on('line', (cmd) => {
                        try {
                            const command = parseCommand(cmd)
                            simulator.execute(command)
                        } catch(e) {}
                    })
                    rl.on('close', () => {
                        // Back to main menu
                        this.start()
                    })
                })
            }
        })
    }
    
    private userInput() {
        const simulator = new Simulator(new Map(5, 5))
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: ''
        })
        rl.on('line', (cmd) => {
            try {
                const command = parseCommand(cmd)
                simulator.execute(command)
            } catch(e) {
                // console.log('Invalid command')
            }
        })
        rl.on('SIGINT', () => {
            rl.question('Are you sure you want to exit? ', (answer) => {
                if (answer.match(/^y(es)?$/i)) {
                    // Back to main menu
                    this.start()
                }
            })
        })
    }
}

const cli = new CliApp()
cli.start()