import { Direction, Rotation } from "./simulator";
import { Coordinate } from "./coordinate";

export class Robot {
    path: Coordinate[]
    private coordinate?: Coordinate
    direction?: Direction

    constructor() {
        this.path = []
    }

    public setCoordinate(coordinate: Coordinate)
    {
        this.coordinate = coordinate
    }

    public setDirection(direction: Direction)
    {
        this.direction = direction
    }

    private isPlaced()
    {
        return this.coordinate && this.direction
    }

    public move() {
        if (!this.isPlaced()) {
            return
        }
        if (this.direction == Direction.NORTH) {
            this.coordinate!.y += 1
        }
    }

    public turn(rotation: Rotation) {
        if (!this.isPlaced()) {
            return
        }
        this.direction = this.direction! + rotation
    }

    public toString(): string {
        if (!this.isPlaced()) {
            return ''
        }
        const direction = Direction[this.direction!]
        return `${this.coordinate},${direction}`
    }
}