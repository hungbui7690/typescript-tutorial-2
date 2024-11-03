/*
  Merge Types
  - using interface instead of type alias


*/

interface Admin {
  permissions: string[]
}

interface AppUser {
  userName: string
}

interface AppAdmin extends Admin, AppUser {}

let admin: AppAdmin

admin = {
  permissions: ['login'],
  userName: 'Max',
}
