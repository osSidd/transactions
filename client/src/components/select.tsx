import { Select, FormControl, MenuItem, InputLabel} from "@mui/material";

export default function SelectBar(){

    const monthArray = [
        {
            month: 'Jan',
            numeric: 0,
        },
        {
            month: 'Feb',
            numeric: 1,
        },
        {
            month: 'Mar',
            numeric: 2,
        },
        {
            month: 'Apr',
            numeric: 3,
        },
        {
            month: 'May',
            numeric: 4,
        },
        {
            month: 'Jun',
            numeric: 5,
        },
        {
            month: 'Jul',
            numeric: 6,
        },
        {
            month: 'Aug',
            numeric: 7,
        },
        {
            month: 'Sep',
            numeric: 8,
        },
        {
            month: 'Oct',
            numeric: 9,
        },
        {
            month: 'Nov',
            numeric: 10,
        },
        {
            month: 'Dec',
            numeric: 11,
        },
    ]

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select month</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value='Mar'
                label="Select month"
                // onChange={handleChange}
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