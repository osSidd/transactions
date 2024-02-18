import { Box } from "@mui/material";
import BarChart from "./barChart";
import PieChart from "./pieChart";

export default function Charts(){
    return (
        <Box mt={5}>
            <BarChart/>
            <PieChart/>
        </Box>
    )
}