import {createContext} from 'react'

export const TodoContext = createContext({
    name: null,
    description: null,
    isCondition: false,
    dateEx: null,
    userId: null
})