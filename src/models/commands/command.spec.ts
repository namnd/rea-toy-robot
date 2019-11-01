import 'mocha'
import { expect } from 'chai'
import { parseCommand } from './command.interface'
import { MoveCommand } from './move-command'
import { TurnCommand } from './turn-command'
import { Rotation } from '../robot'
import { ReportCommand } from './report-command'
import { PlaceCommand } from './place-command'

describe('Command', () => {
    it('parseCommand should parse MOVE command successfully', () => {
        const command = parseCommand('MOVE')
        expect(command).instanceOf(MoveCommand)
    })

    it('parseCommand should parse LEFT command successfully', () => {
        const command = parseCommand('LEFT')
        expect(command).instanceOf(TurnCommand)
        expect((command as TurnCommand).rotation).equal(Rotation.Left)
    })

    it('parseCommand should parse RIGHT command successfully', () => {
        const command = parseCommand('RIGHT')
        expect(command).instanceOf(TurnCommand)
        expect((command as TurnCommand).rotation).equal(Rotation.Right)
    })

    it('parseCommand should parse REPORT command successfully', () => {
        const command = parseCommand('REPORT')
        expect(command).instanceOf(ReportCommand)
    })

    it('parseCommand should parse PLACE command successfully', () => {
        const command = parseCommand('PLACE 0,0,WEST')
        expect(command).instanceOf(PlaceCommand)
    })

    it('parseCommand should throw error if command is invalid', () => {
        try {
            const command = parseCommand('INVALID')
        } catch(e) {
            expect(e).instanceOf(Error)
        }
    })
})