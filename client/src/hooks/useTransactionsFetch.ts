import { useEffect } from "react";
import useTransactionContext from "./useTransactionContext";

export default function useTransactionFetch(){
    const {dispatch} = useTransactionContext()

    async function fetchTransactions(month=2){
        try{
            const response = await fetch(`http://localhost:3000/api/transactions/?month=${month}&page=1`)

            if(response.ok){
                const data = await response.json()
                dispatch({
                    type:'SET_ALL_TRANSACTIONS',
                    payload: data
                })
            }
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        fetchTransactions()
    }, [])

    return {
        fetchTransactions,
    }
}