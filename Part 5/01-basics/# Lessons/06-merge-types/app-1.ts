/*
  Merge Types



*/

type Admin = {
  permissions: string[]
}

type AppUser = {
  userName: string
}

type AppAdminX = Admin | AppUser // union -> just can use Type Alias -> cannot use Interface
type AppAdmin = Admin & AppUser // merge type -> combination of 2 types

let admin: AppAdmin

// using merge type
admin = {
  permissions: ['login'],
  userName: 'Max',
}
