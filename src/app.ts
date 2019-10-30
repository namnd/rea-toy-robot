import { Simulator, Direction, Rotation } from './models/simulator'
import { Map } from './models/map'
import { Robot } from './models/robot'
import { Coordinate } from './models/coordinate'

// Create a map
const map = new Map(5, 5)
// Create a robot
const robot = new Robot()
// Create the simulator on the map
const simulator = new Simulator(map)

// Example 1:
// Place the robot in the map
simulator.place(robot, new Coordinate(0, 0), Direction.NORTH)
robot.move()
// Expected output 0,1,NORTH
simulator.report()

// Example 2:
simulator.place(robot, new Coordinate(0, 0), Direction.NORTH)
robot.turn(Rotation.Left)
simulator.report()
