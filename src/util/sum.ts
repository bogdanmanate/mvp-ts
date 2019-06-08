export const sum = (...nums: number[]): number =>
  nums.reduce((memo, num) => memo + num, 0)
