import { Coordinate } from "./coordinate"

export class Map
{
    width: number
    height: number

    constructor(width: number, height: number)
    {
        if (width <= 0 || height <= 0) {
            throw new Error('Invalid input')
        }
        this.width = width
        this.height = height
    }

    /**
     * Validate a coordinate
     * @param coordinate 
     */
    public validateCoordinate(coordinate: Coordinate)
    {
        return coordinate.x >= 0 && coordinate.x <= this.width
            && coordinate.y >= 0 && coordinate.y <= this.height
    }
}