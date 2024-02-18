import { Box, Container, Typography } from "@mui/material"
import SearchNSelect from "./components/searchNSelect"
import TransactionTable from "./components/table"
import Stats from "./components/stats"
import Charts from "./components/charts"

function App() {
  return (
    <>
      <Container maxWidth='xl'>
        <Typography variant="h4" fontWeight={300} component='h1'>Transactions Dashboard</Typography>
        <Box mx={5}>
          <SearchNSelect/>
          <TransactionTable/>
          <Stats/>
          <Charts/>
        </Box>

      </Container>
    </>
  )
}

export default App
