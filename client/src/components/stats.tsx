import { Box, Paper, Typography } from "@mui/material";
import monthArray from '../static/months'

export default function Stats({totalSale, totalSold, totalUnSold, month}: {totalSale: number, totalSold: number, totalUnSold: number, month: number}){

    const selectedMonth = monthArray.find(item => item.numeric === month)

    return (
        <Box width='25%'>
            <Paper elevation={2} sx={{p:2}}>
                <Typography>Month - <span style={{fontWeight:700}}>{selectedMonth?.month}</span></Typography>
                <Typography>Total sales - {totalSale}</Typography>
                <Typography>Total sold - {totalSold}</Typography>
                <Typography>Total not sold - {totalUnSold}</Typography>
            </Paper>
        </Box>
    )
}