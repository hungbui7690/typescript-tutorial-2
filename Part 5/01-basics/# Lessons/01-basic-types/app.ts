/*
  - npm i -D typescript 
  - npx tsc
  - <tsx> <app.tsx>


*/

// -------------------------
// basic types: string, number, boolean
// -------------------------

let userName = 'Max'

// userName = 34;
userName = 'Max'

let userAge = 34

let isValid = true

// -------------------------
// union types
// -------------------------

type StringOrNum = string | number

let userID: StringOrNum = 'abc1'
userID = 123
// userID = true // error
