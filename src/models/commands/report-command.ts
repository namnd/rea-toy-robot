import { Command } from './command.interface'
import { Simulator } from '../simulator'

export class ReportCommand implements Command {

    execute(simulator: Simulator) {
        if (simulator.robot == null) {
            throw new Error('Robot is not placed on the map yet')
        }
        console.log(`${simulator.robot}`)
    }
    
}