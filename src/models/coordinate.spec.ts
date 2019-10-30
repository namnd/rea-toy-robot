import { Coordinate } from './coordinate'
import 'mocha'
import { expect } from 'chai'

describe('Coordinate', () => {
    it('constructor', () => {
        // Invalid coordinate
        try {
            const invalid = new Coordinate(-1, 0)
        } catch(e) {
            expect(e).instanceOf(Error)
        }
        // Valid one
        const coordinate = new Coordinate(1, 1)
        expect(coordinate).instanceOf(Coordinate)
    })

    it('toString', () => {
        const coordinate = new Coordinate(1, 1)
        expect(`${coordinate}`).equal('1,1')
    })
})