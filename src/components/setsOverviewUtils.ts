import { Set } from '../types'


export const getYearsFromSets = (sets:Set[]):number[] => {
    let output: number[] = []

    sets.map((set) => {
        output.push(set.year)
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