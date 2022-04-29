import { TItem } from "../types/Item"

export const getCurrentMonth = () => {
    const now = new Date()
    return `${now.getFullYear()}-${now.getMonth() + 1}`
}

export const filterListByMonth = (list: TItem[], date: string): TItem[] => {
    const newList: TItem[] = []
    const [ year, month ] = date.split('-')

    for(let i in list){
        if(list[i].date.getFullYear() === parseInt(year) && (list[i].date.getMonth() + 1) === parseInt(month)){
            newList.push(list[i])
        }
    }
    return newList
}   

export const formatDate = (date: Date): string => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}` 
}

export const addZeroToDate = (n: number): string => {
    if(n < 10){
        return `0${n}`
    } else {
        return `${n}`
    }
}

export const formatCurrentMonth = (currentMonth: string): string => {
    const [ year, month ] = currentMonth.split('-')
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    return `${months[parseInt(month) - 1]} ${year}`
}