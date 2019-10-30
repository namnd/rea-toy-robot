import { Simulator } from '../simulator'

export interface Command {

    execute(simulator: Simulator): void
    
}
