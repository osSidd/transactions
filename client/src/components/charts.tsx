import { Box } from "@mui/material";
import BarChart from "./barChart";
import PieChart from "./pieChart";

export default function Charts(){
    return (
        <Box>
            <BarChart/>
            <PieChart/>
        </Box>
    )
}