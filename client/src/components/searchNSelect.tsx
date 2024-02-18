import { Box } from "@mui/material";
import SearchBar from "./searchbar";
import SelectBar from "./select";

export default function SearchNSelect(){
    return (
        <Box display='flex' justifyContent='space-between'>
            <SearchBar/>
            <Box width={225}>
                <SelectBar/>
            </Box>
        </Box>
    )
}