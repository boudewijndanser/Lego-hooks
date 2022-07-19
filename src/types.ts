export type User = {
    kind: 'loggedIn'
    username: string
    password: string
    hash: string
    apiKey: string
} | {
    kind: 'loggedOut'
    }