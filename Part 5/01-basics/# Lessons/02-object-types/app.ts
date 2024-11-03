/*
  Object Types


*/

let userX: object

userX = {
  name: 'Max',
  age: 34,
  isAdmin: true,
  id: 'abc',
}

// userX = {}

// --------------

type User = {
  name: string
  age: number
  isAdmin: boolean
  id: string | number
}

let user: User

user = {
  name: 'Max',
  age: 34,
  isAdmin: true,
  id: 'abc', // 123
}
