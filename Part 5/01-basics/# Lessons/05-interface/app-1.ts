/*
  Defining Object Types with Interfaces
  - interface: limit to object
  - type alias: can be anything


*/

interface Credentials {
  password: string
  email: string
}

let creds: Credentials

creds = {
  password: 'abc',
  email: 'test@example.com',
}
