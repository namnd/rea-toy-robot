import { Command } from './command.interface'
import { Simulator } from '../simulator'

export class MoveCommand implements Command {
    
    execute(simulator: Simulator) {
        if (simulator.robot == null) {
            console.log('Robot is not placed on the map yet')
            return
        }
        const newCoordinate = simulator.robot.getNewCoordinate()
        if (!simulator.map.validateCoordinate(newCoordinate)) {
            console.log('Reaching boundary')
            return
        }
        simulator.robot.coordinate = newCoordinate
    }
}
