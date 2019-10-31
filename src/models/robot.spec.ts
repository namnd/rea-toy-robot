import 'mocha'
import { expect } from 'chai'
import { Robot, Direction } from './robot'
import { Coordinate } from './coordinate'

describe('Robot', () => {
    it('constructor should create object successfully', () => {
        const robot = new Robot()
        expect(robot).instanceOf(Robot)
    })

    it('getNewCoordinate should return new coordinate when facing north', () => {
        const robot = new Robot(new Coordinate(0, 0), Direction.NORTH)
        const newCoordinate = robot.getNewCoordinate()
        expect(`${newCoordinate}`).equal('0,1')
    })

    it('getNewCoordinate should return new coordinate when facing south', () => {
        const robot = new Robot(new Coordinate(0, 1), Direction.SOUTH)
        const newCoordinate = robot.getNewCoordinate()
        expect(`${newCoordinate}`).equal('0,0')
    })

    it('getNewCoordinate should return new coordinate when facing east', () => {
        const robot = new Robot(new Coordinate(0, 0), Direction.EAST)
        const newCoordinate = robot.getNewCoordinate()
        expect(`${newCoordinate}`).equal('1,0')
    })

    it('getNewCoordinate should return new coordinate when facing west', () => {
        const robot = new Robot(new Coordinate(1, 0), Direction.WEST)
        const newCoordinate = robot.getNewCoordinate()
        expect(`${newCoordinate}`).equal('0,0')
    })
})