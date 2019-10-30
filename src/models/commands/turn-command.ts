import { Command } from './command.interface'
import { Simulator } from '../simulator'
import { Rotation } from '../robot'

export class TurnCommand implements Command {
    rotation: Rotation
    constructor(rotation: Rotation) {
        this.rotation = rotation
    }
    execute(simulator: Simulator) {
        simulator.robot!.turn(this.rotation)
    }

}