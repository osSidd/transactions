import { Box, Container, Typography } from "@mui/material"
import useTransactionContext from "./hooks/useTransactionContext"
import useTransactionFetch from "./hooks/useTransactionsFetch"
// import PieChart from "./components/pieChart"
// import BarChart from "./components/barChart"
import TransactionTable from "./components/table"
import Stats from "./components/stats"
import SearchBar from "./components/searchbar"
import SelectBar from "./components/select"

function App() {
  useTransactionFetch()
  const {
    transactions,
    noOfPages,
    totalSale,
    totalSold,
    totalUnSold,
    // categories,
    priceRange,
    month,
  } = useTransactionContext()
 console.log(priceRange)
  return (
    <>
      <Container maxWidth='xl'>
        <Typography variant="h4" fontWeight={300} component='h1'>Transactions Dashboard</Typography>
        <Box mx={5} mt={5}>
          <Box display='flex' justifyContent='space-between'>
            <SearchBar/>
            <Box width={200}>
              <SelectBar/>
            </Box>
          </Box>
          <Box>
            <TransactionTable transactions={transactions} noOfPages={noOfPages}/>
          </Box>
          <Box mt={5} display='flex' justifyContent='space-between' alignItems='center'>
            {/* <BarChart priceRange={priceRange}/> */}
            <Stats totalSale={totalSale} totalSold={totalSold} totalUnSold={totalUnSold} month={month}/>
          </Box>
          {/* <Box mt={5}>
            <PieChart categories={categories }/>
          </Box> */}
        </Box>
      </Container>
    </>
  )
}

export default App
