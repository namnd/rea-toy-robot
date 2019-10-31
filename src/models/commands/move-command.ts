import { Command } from './command.interface'
import { Simulator } from '../simulator'

export class MoveCommand implements Command {
    
    execute(simulator: Simulator) {
        if (simulator.robot == null) {
            throw new Error('Robot is not placed on the map yet')
        }
        const newCoordinate = simulator.robot.getNewCoordinate()
        if (!simulator.map.validateCoordinate(newCoordinate)) {
            throw new Error('Reaching boundary')
        }
        simulator.robot.coordinate = newCoordinate
    }
}
