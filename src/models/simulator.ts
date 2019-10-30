import { Map } from './map'
import { Robot } from './robot'
import { Command } from './commands/command.interface'

export class Simulator
{
    map: Map
    robot?: Robot

    constructor(map: Map)
    {
        this.map = map
    }

    public execute(command: Command) {
        command.execute(this)
    }

}