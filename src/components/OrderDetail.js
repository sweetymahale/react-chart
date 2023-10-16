import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    textField: {
        border: "2px solid black",
    },
});

function createData(
    username,
    orderno,
    orderdate,
    status,
    amount,
    quantity,
    totalamount
) {
    return {
        username,
        orderno,
        orderdate,
        status,
        amount,
        quantity,
        totalamount,
    };
}

const rows = [
    createData("akshayk", 5, 12 / 5 / 20, "reciceved", 550, 120, 12003),
    createData("meghna", 5, 12 / 5 / 20, "reciceved", 550, 120, 12003),
    createData("shami", 5, 12 / 5 / 20, "reciceved", 550, 120, 12003),
    createData("dhoni", 5, 12 / 5 / 20, "reciceved", 550, 120, 12003),
];

export default function AcccessibleTable(props) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Box
                display="flex"
                justifyContent="flex-start"
                m={1}
                p={1}
                bgcolor="background.paper"
            >
                <Box p={1}>
                    <h2>{props.text}</h2>
                </Box>
            </Box>
            <Table
                className={(classes.table, classes.textField)}
                aria-label="caption table"
            >
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <b>UserName</b>
                        </TableCell>
                        <TableCell align="right">
                            <b>OrderNo</b>
                        </TableCell>
                        <TableCell align="right">
                            <b>OrderDate</b>
                        </TableCell>
                        <TableCell align="right">
                            <b>Status</b>
                        </TableCell>
                        <TableCell align="right">
                            <b>TotalAmount</b>
                        </TableCell>
                        <TableCell align="right">
                            <b>TotalQuantity</b>
                        </TableCell>
                        <TableCell align="right">
                            <b>TotalProductCount</b>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.username}
                            </TableCell>
                            <TableCell align="right">{row.orderno}</TableCell>
                            <TableCell align="right">{row.orderdate}</TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                            <TableCell align="right">{row.amount}</TableCell>
                            <TableCell align="right">{row.quantity}</TableCell>
                            <TableCell align="right">{row.totalamount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
