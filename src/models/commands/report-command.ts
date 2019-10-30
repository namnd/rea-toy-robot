import { Command } from './command.interface'
import { Simulator } from '../simulator'

export class ReportCommand implements Command {

    execute(simulator: Simulator) {
        if (simulator.robot == null) {
            console.log('Robot is not placed on the map yet')
            return
        }
        console.log(`${simulator.robot}`)
    }
    
}