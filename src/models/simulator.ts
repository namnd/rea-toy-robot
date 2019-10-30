import { Robot } from './robot'
import { Map } from './map'
import { Coordinate } from './coordinate'

enum Command {
    Place = 1,
    Move
}

export enum Direction {
    NORTH = 90,
    SOUTH = 270,
    EAST = 0,
    WEST = 180
}

export enum Rotation {
    Left = 90,
    Right = -90
}

export class Simulator
{
    map: Map
    robot?: Robot

    constructor(map: Map)
    {
        this.map = map
    }

    public place(robot: Robot, coordinate: Coordinate, direction: Direction)
    {
        // Validate coordinate boundary
        robot.setCoordinate(coordinate)
        robot.setDirection(direction)
        this.robot = robot
    }
    
    public report()
    {
        if (this.robot) {
            console.log(`${this.robot}`)
        }
        
    }
}