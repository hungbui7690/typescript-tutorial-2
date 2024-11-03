/*
  Function Types


*/

function add(a: number, b: number) {
  const result = a + b
  return result
}

// Type Alias
type AddFn = (a: number, b: number) => number

function calculate(a: number, b: number, calcFn: AddFn) {
  calcFn(a, b)
}

calculate(2, 5, add)
