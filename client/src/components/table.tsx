import Table from '@mui/material/Table';
import Box from '@mui/material/Box';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { Transactions } from '../types';

export default function TransactionTable({transactions, noOfPages}: {noOfPages: number, transactions: Transactions[]}) {
  return (
    <Box mt={5}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Sold</TableCell>
              <TableCell align="right">Image</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction: Transactions) => (
              <TableRow
                key={transaction.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {transaction.id}
                </TableCell>
                <TableCell sx={{fontSize:12}} align="left">{transaction.title}</TableCell>
                <TableCell sx={{fontSize:12}} align="left">{transaction.description}</TableCell>
                <TableCell align="right">{transaction.price.toFixed(2)}</TableCell>
                <TableCell sx={{fontSize:12}} align="center">{transaction.category}</TableCell>
                <TableCell sx={{fontSize:12}} align="center">{transaction.sold ? 'sold out' : 'in stock'}</TableCell>
                <TableCell align="right">
                  <Box
                    component='img'
                    width={75}
                    src={transaction.image}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography mt={2}>Number of pages - {noOfPages}</Typography>
    </Box>
  );
}