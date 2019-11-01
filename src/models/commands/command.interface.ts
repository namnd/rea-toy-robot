import { Simulator } from '../simulator'
import { MoveCommand } from './move-command'
import { TurnCommand } from './turn-command'
import { Rotation, Robot, Direction } from '../robot'
import { ReportCommand } from './report-command'
import { PlaceCommand } from './place-command'
import { Coordinate } from '../coordinate'

/**
 * Interface of command that the simulator can execute
 */
export interface Command {

    execute(simulator: Simulator): void
    
}

/**
 * Parse a command in textual format into Command object
 * It throws an error if invalid text is provided
 * @param text 
 */
export function parseCommand(text: string): Command {
    if (text === "MOVE") {
        return new MoveCommand()
    } else if (text === "LEFT") {
        return new TurnCommand(Rotation.Left)
    } else if (text === "RIGHT") {
        return new TurnCommand(Rotation.Right)
    } else if (text === "REPORT") {
        return new ReportCommand()
    }
    const directionMapping: {[key: string]: Direction} = {
        "NORTH": Direction.NORTH,
        "SOUTH": Direction.SOUTH,
        "EAST": Direction.EAST,
        "WEST": Direction.WEST
    }
    const placeCmdRegex: RegExp = /^PLACE\s(\d),(\d),(NORTH|SOUTH|EAST|WEST)/gs
    const match = placeCmdRegex.exec(text)
    if (match !== null && match.length >= 4) {
        return new PlaceCommand(
            new Robot(),
            new Coordinate(Number(match[1]), Number(match[2])),
            directionMapping[match[3]])
    }
    throw new Error('Invalid command')
}