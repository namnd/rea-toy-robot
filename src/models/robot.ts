import { Coordinate } from './coordinate'

/**
 * Simulate Cartesian coordinate system
 * The Direction represents the angle between the robot facing direction and x axis
 */
export enum Direction {
    EAST = 0,
    NORTH = 90,
    WEST = 180,
    SOUTH = 270
}

export enum Rotation {
    Left = 90,      // Turn Left increases the angle by 90
    Right = -90     // Turn Right decreases the angle by 90
}

export class Robot {

    coordinate: Coordinate
    direction: Direction

    constructor(coordinate?: Coordinate, direction?: Direction) {
        this.coordinate = coordinate || new Coordinate(0, 0)
        this.direction = direction || Direction.EAST
    }

    /**
     * Return new coordinate that robot might move to
     * The robot is not actually moving, it just predicts the destination
     */
    public getNewCoordinate(): Coordinate {
        let newX = this.coordinate.x
        let newY = this.coordinate.y
        switch (this.direction) {
            case Direction.NORTH: newY += 1 // Move up if facing NORTH
            break
            case Direction.SOUTH: newY -= 1 // Move down if facing SOUTH
            break
            case Direction.EAST: newX += 1  // Move right if facing EAST
            break
            case Direction.WEST: newX -= 1  // Move left is facing WEST
        }
        return new Coordinate(newX, newY)
    }

    /**
     * In case 0 - 90 return negative, adding 360 to return correct value of 270
     * In case 270 + 90 = 360, modulus by 360 to return 0 
     * @param rotation 
     */
    public turn(rotation: Rotation) {
        this.direction = (this.direction + rotation + 360) % 360
    }

    public toString(): string {
        const direction = Direction[this.direction]
        return `${this.coordinate},${direction}`
    }
}