import { Coordinate } from './coordinate'

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

export class Robot {
    coordinate: Coordinate
    direction: Direction

    constructor() {
        this.coordinate = new Coordinate(0, 0)
        this.direction = Direction.EAST
    }

    public getNewCoordinate() {
        let newX = this.coordinate.x
        let newY = this.coordinate.y
        switch (this.direction) {
            case Direction.NORTH: newY += 1
            break
            case Direction.SOUTH: newY -= 1
            break
            case Direction.EAST: newX += 1
            break
            case Direction.WEST: newX -= 1
        }
        return new Coordinate(newX, newY)
    }

    public turn(rotation: Rotation) {
        this.direction = (this.direction + rotation + 360) % 360
    }

    public toString(): string {
        const direction = Direction[this.direction]
        return `${this.coordinate},${direction}`
    }
}