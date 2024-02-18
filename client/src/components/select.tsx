import { Select, FormControl, MenuItem, InputLabel} from "@mui/material";
import monthArray from '../static/months'
import useTransactionContext from "../hooks/useTransactionContext";
import useTransactionFetch from "../hooks/useTransactionsFetch";

export default function SelectBar(){

    const {month, dispatch} = useTransactionContext()
    const {fetchTransactions} = useTransactionFetch()

    function handleChange(mon: number){
        fetchTransactions(mon)
        dispatch({
            type: 'SET_MONTH',
            payload: mon
        })
    }

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select month</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={month}
                label="Select month"
                onChange={(e: React.ChangeEvent) => handleChange((e.target as HTMLSelectElement).value)}
            >
               {
                monthArray.map(month => (
                    <MenuItem key={month.numeric} value={month.numeric}>{month.month}</MenuItem>
                ))
               }
            </Select>
        </FormControl>
    )
}