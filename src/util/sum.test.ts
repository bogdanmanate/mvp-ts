import { sum } from '~util/sum'

describe('sum', () => {
  it('adds 0 numbers', () => expect(sum()).toBe(0))
  it('adds 1 number', () => expect(sum(1)).toBe(1))
  it('adds 2 numbers', () => expect(sum(1, 2)).toBe(3))
  it('adds 3 numbers', () => expect(sum(1, 2, 3)).toBe(6))
})
