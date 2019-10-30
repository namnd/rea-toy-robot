export class Coordinate
{
    x: number
    y: number
    constructor(x: number, y: number)
    {
        if (x < 0 || y < 0) {
            throw new Error('Invalid input')
        }
        this.x = x
        this.y = y
    }

    public toString(): string {
        return `${this.x},${this.y}`
    }
}