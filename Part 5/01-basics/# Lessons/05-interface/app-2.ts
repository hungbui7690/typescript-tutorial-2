/*
  Interface vs Custom Type Alias



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

// implementing an interface in a class
class AuthCredentials implements Credentials {
  email: string
  password: string
  userName: string
}

function login(credentials: Credentials) {}

login(new AuthCredentials())
