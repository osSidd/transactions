import { ReactNode, createContext, useReducer } from "react"

export const TransactionConext = createContext({})

const reducer = (state, action) => {
    switch(action.type){
        case 'SET_ALL_TRANSACTIONS':
            return {...state, ...action.payload}
        case 'SET_MONTH':
            return {...state, month: action.payload}
        default:
            return state
    }
}

export default function TransactionContextProvider({children}: {children: ReactNode}){

    const [state, dispatch] = useReducer(reducer, {
        transactions: [],
        noOfPages: 0,
        totalSale: 0,
        totalSold: 0,
        totalUnSold: 0,
        month: 2,
        categories: [],
        priceRange: []
    })

    return (
        <TransactionConext.Provider value={{...state, dispatch}}>
            {children}
        </TransactionConext.Provider>
    )
}