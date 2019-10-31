import { Map } from './map'
import { Simulator } from './simulator'
import 'mocha'
import { expect } from 'chai'
import { PlaceCommand } from './commands/place-command'
import { Robot, Direction, Rotation } from './robot'
import { Coordinate } from './coordinate'
import { MoveCommand } from './commands/move-command'
import { TurnCommand } from './commands/turn-command'
import { ReportCommand } from './commands/report-command'

const map = new Map(2, 2)

describe('Simulator', () => {
    it('constructor', () => {
        const simulator = new Simulator(map)
        expect(simulator).instanceOf(Simulator)
    })

    it('execute Place command unsucessfully', () => {
        const simulator = new Simulator(map)
        const placeCommand = new PlaceCommand(new Robot(), new Coordinate(3, 0), Direction.NORTH)
        simulator.execute(placeCommand)
        expect(simulator.robot).is.undefined
    })

    it('execute Place command successfully', () => {
        const simulator = new Simulator(map)
        const placeCommand = new PlaceCommand(new Robot(), new Coordinate(0, 0), Direction.NORTH)
        simulator.execute(placeCommand)
        expect(`${simulator.robot}`).equal('0,0,NORTH')
    })

    it('execute Move command unsuccessfully due to no robot on the map', () => {
        const simulator = new Simulator(map)
        simulator.execute(new MoveCommand())
        expect(simulator.robot).is.undefined
    })

    it('execute Move command unsuccessfully due to reaching boundary of the map', () => {
        const simulator = new Simulator(map)
        const placeCommand = new PlaceCommand(new Robot(), new Coordinate(0, 0), Direction.NORTH)
        simulator.execute(placeCommand)
        simulator.execute(new MoveCommand())
        simulator.execute(new MoveCommand())
        expect(`${simulator.robot}`).equal('0,2,NORTH')
        simulator.execute(new MoveCommand())
        expect(`${simulator.robot}`).equal('0,2,NORTH')
    })

    it('execute Move command successfully', () => {
        const simulator = new Simulator(map)
        const placeCommand = new PlaceCommand(new Robot(), new Coordinate(0, 0), Direction.NORTH)
        simulator.execute(placeCommand)
        simulator.execute(new MoveCommand())
        expect(`${simulator.robot}`).equal('0,1,NORTH')
    })

    it('execute Turn command successfully', () => {
        const simulator = new Simulator(map)
        const placeCommand = new PlaceCommand(new Robot(), new Coordinate(0, 0), Direction.NORTH)
        simulator.execute(placeCommand)
        simulator.execute(new TurnCommand(Rotation.Right))
        expect(`${simulator.robot}`).equal('0,0,EAST')
    })

    it('execute Turn command unsuccessfully due to no robot on the map', () => {
        const simulator = new Simulator(map)
        simulator.execute(new TurnCommand(Rotation.Right))
        expect(simulator.robot).is.undefined
    })

    it('execute Report command successfully', () => {
        const simulator = new Simulator(map)
        const placeCommand = new PlaceCommand(new Robot(), new Coordinate(0, 0), Direction.NORTH)
        simulator.execute(placeCommand)
        simulator.execute(new ReportCommand())
    })

    it('execute Report command unsuccessfully due to no robot on the map', () => {
        const simulator = new Simulator(map)
        simulator.execute(new ReportCommand())
        expect(simulator.robot).is.undefined
    })
})