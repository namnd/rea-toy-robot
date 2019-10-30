import { Map } from './map'
import { Simulator } from './simulator'
import 'mocha'
import { expect } from 'chai'

describe('Simulator', () => {
    it('constructor', () => {
        const map = new Map(1, 1)
        const simulator = new Simulator(map)
        expect(simulator).instanceOf(Simulator)
    })
})