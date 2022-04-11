import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}
var oneRow=[]



export default function BasicTable() {
  const { id } = useParams();
  const orderState = useSelector((state) => state.handleOrders);
  var itemz=[]
  for (let i=0;i<orderState.length;i++)
  {
    if(orderState[i]._id&&id===orderState[i]._id){
    itemz.push(orderState[i].orderItems)
    }
  }

console.log(itemz[0])
   
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align="right">status</TableCell>
            <TableCell align="right">date</TableCell>
            <TableCell align="right">total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {itemz.length>0&&itemz[0].map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.brand}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.brand}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
