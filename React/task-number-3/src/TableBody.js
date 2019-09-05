import React from "react";
import {TableBody, TableRow, TableCell} from "@material-ui/core";

function TabBody(props) {
    return (
        <TableBody>
            {
                props.pigs.map(pig => (
                    <TableRow key={pig.id}>
                        <TableCell component="th" scope="row"> {pig.id}</TableCell>
                        <TableCell> {pig.name}</TableCell>
                        <TableCell> {pig.desc}</TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
    )
}

export default TabBody;
