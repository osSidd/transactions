import { Box } from "@mui/material";
import TransactionTable from "./table";
import Stats from "./stats";

export default function TableNStats(){
    return (
        <Box display='flex' justifyContent='space-between' alignItems='center'>
            <TransactionTable/>
            <Stats/>
        </Box>
    )
}