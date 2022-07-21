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

export type Theme = {
    theme: string
    setCount: number
    subThemeCount: number
    yearFrom: number
    yearTo: number
}

export type ThemeApiResponse =  {
    status: "success" // Add other status options
    "matches": number
    "themes": Theme[]
}