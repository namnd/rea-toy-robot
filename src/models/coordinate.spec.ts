import { Coordinate } from './coordinate'
import 'mocha'
import { expect } from 'chai'

describe('Coordinate', () => {
    it('constructor should create object successfully', () => {
        const coordinate = new Coordinate(1, 1)
        expect(coordinate).instanceOf(Coordinate)
    })

    it('toString should return correct coordinate string', () => {
        const coordinate = new Coordinate(1, 1)
        expect(`${coordinate}`).equal('1,1')
    })
})