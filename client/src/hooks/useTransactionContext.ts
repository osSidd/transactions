import { useContext } from "react";
import { TransactionConext } from "../context/transactionContext";

export default function useTransactionContext(){
    const {
        transactions,
        noOfPages,
        totalSale,
        totalSold,
        totalUnSold,
        categories,
        priceRange,
        month,
        dispatch,
    } = useContext(TransactionConext)

    return {
        transactions,
        noOfPages,
        totalSale,
        totalSold,
        totalUnSold,
        categories,
        priceRange,
        month,
        dispatch,
    } 
}