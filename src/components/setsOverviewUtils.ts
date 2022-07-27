import { Set } from '../types'

export function getValuesFromSets<Type>(sets:Set[], value:string):Array<Type> {
    let output: Array<Type> = []

    sets.map((set) => {
        output.push(set[value as keyof Set] as Type)
    })

    return output
}

export const countElementsInArray = (input: number[]): string[] => {
    let output: string [] = []

    input.map((year) => {
        let counter: number = input.filter((item: number) => item === year).length
        output.push(`${year} - ${counter}`)
    })

    return output
}