import 'mocha'
import { expect, assert } from 'chai'
import { Map } from './map'
import { Coordinate } from './coordinate'

describe('Map', () => {
    it('constructor should throw exception', () => {
        try {
            const invalid = new Map(0, 5)
        } catch(e) {
            expect(e).instanceOf(Error)
        }
    })

    it('constructor should create object successfully', () => {
        const map = new Map(5, 5)
        expect(map).instanceOf(Map)
    })

    it('validateCoordinate should return true if coordinate is inbound', () => {
        const map = new Map(5,5)
        assert.isTrue(map.validateCoordinate(new Coordinate(0, 0)))
        assert.isTrue(map.validateCoordinate(new Coordinate(1, 4)))
        assert.isTrue(map.validateCoordinate(new Coordinate(0, 5)))
        assert.isTrue(map.validateCoordinate(new Coordinate(5, 0)))
        assert.isTrue(map.validateCoordinate(new Coordinate(5, 5)))
    })

    it('validateCoordinate should return false if coordinate is out of bounds', () => {
        const map = new Map(5,5)
        assert.isFalse(map.validateCoordinate(new Coordinate(0, 6)))
        assert.isFalse(map.validateCoordinate(new Coordinate(-1, 4)))
        assert.isFalse(map.validateCoordinate(new Coordinate(6, 1)))
        assert.isFalse(map.validateCoordinate(new Coordinate(0, -2)))
    })
})