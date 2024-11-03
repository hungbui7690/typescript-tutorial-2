/*
  Type Guards



*/

type Role = 'admin' | 'user' | 'editor'

let role: Role

role = 'admin'
role = 'user'
role = 'editor'

// 2 ways to check type
function performAction(action: string | number, role: Role) {
  if (role === 'admin') {
    // ...
  }
  if (typeof action === 'string') {
    // ...
  }
}
