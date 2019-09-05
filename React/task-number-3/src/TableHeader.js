import React from 'react';
import {TableCell, TableHead, TableRow} from "@material-ui/core";

function TableHeader(props){
    return(
      <TableHead>
          <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
          </TableRow>
      </TableHead>
    );
}

export default TableHeader;
