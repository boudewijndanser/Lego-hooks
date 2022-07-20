export type User = {
    kind: 'loggedIn'
    username: string
    password: string
    hash: string
    apiKey: string
} | {
    kind: 'loggedOut'
    username?: string
    password?: string
    apiKey?: string
    }

export type Form = {
    username: string
    password: string
    apiKey: string
}