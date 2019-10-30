import { Simulator } from './models/simulator'
import { Map } from './models/map'
import { Robot, Direction, Rotation } from './models/robot'
import { Coordinate } from './models/coordinate'
import { PlaceCommand } from './models/commands/place-command'
import { MoveCommand } from './models/commands/move-command'
import { ReportCommand } from './models/commands/report-command'
import { TurnCommand } from './models/commands/turn-command'

// Create a map
const map = new Map(5, 5)
// Create a robot
const robot = new Robot()

// Create the simulator on the map
const simulator = new Simulator(map)
simulator.execute(new MoveCommand())
simulator.execute(new PlaceCommand(robot, new Coordinate(10, 10), Direction.NORTH))
simulator.execute(new ReportCommand())


// Example a:
// Place the robot in the map
simulator.execute(new PlaceCommand(robot, new Coordinate(0, 0), Direction.NORTH))
simulator.execute(new MoveCommand())
// Expected output 0,1,NORTH
simulator.execute(new ReportCommand())

// Example b:
simulator.execute(new PlaceCommand(robot, new Coordinate(0, 0), Direction.NORTH))
simulator.execute(new TurnCommand(Rotation.Left))
simulator.execute(new ReportCommand())

// // Example c:
simulator.execute(new PlaceCommand(robot, new Coordinate(1, 2), Direction.EAST))
simulator.execute(new MoveCommand())
simulator.execute(new MoveCommand())
simulator.execute(new MoveCommand())
simulator.execute(new MoveCommand())
simulator.execute(new MoveCommand())
simulator.execute(new MoveCommand())
simulator.execute(new TurnCommand(Rotation.Left))
simulator.execute(new MoveCommand())
simulator.execute(new ReportCommand())