import { Command } from './command.interface'
import { Robot, Direction } from '../robot'
import { Coordinate } from '../coordinate'
import { Simulator } from '../simulator'


export class PlaceCommand implements Command {
    
    robot: Robot
    coordinate: Coordinate
    direction: Direction

    constructor(robot: Robot, coordinate: Coordinate, direction: Direction) {
        this.robot = robot
        this.coordinate = coordinate
        this.direction = direction
    }

    execute(simulator: Simulator) {
        if (!simulator.map.validateCoordinate(this.coordinate)) {
            throw new Error('Out of bounds')
        }
        this.robot.coordinate = this.coordinate
        this.robot.direction = this.direction
        simulator.robot = this.robot
    }
}