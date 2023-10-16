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

function createData(number, amount, quantity, name) {
    return { number, amount, quantity, name };
}

const rows = [
    createData(1, "2kg", 6, "AkshayK"),
    createData(2, "58kg", 8, "praj"),
    createData(3, "6kg", 58, "benjohn"),
    createData(4, "12kg", 12, "seerashalini"),
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
                            <b>Order No</b>
                        </TableCell>
                        <TableCell align="right">
                            <b>Total Amount</b>
                        </TableCell>
                        <TableCell align="right">
                            <b>Total Quantity</b>
                        </TableCell>
                        <TableCell align="right">
                            <b>User Name</b>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.number}
                            </TableCell>
                            <TableCell align="right">{row.amount}</TableCell>
                            <TableCell align="right">{row.quantity}</TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
