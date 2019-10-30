import { Coordinate } from './coordinate'

export class Map
{
    private points: Coordinate[][]

    constructor(width: number, height: number)
    {
        this.points = []
        for (let i: number = 0; i < width; i++) {
            this.points[i] = []
            for (let j: number = 0; j < height; j++) {
                this.points[i][j] = new Coordinate(i, j)
            }
        }
    }
}