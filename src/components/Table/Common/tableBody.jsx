/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@mui/material/CardMedia';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  tableCell: {
    borderBottom: 'none',
  },
});

const getProperty = (obj, prop) => {
  const parts = prop.split('.');

  if (Array.isArray(parts)) {
    const last = parts.length > 1 ? parts.pop() : parts;
    const l = parts.length;
    let i = 1;
    let current = parts[0];

    while ((obj[current] in obj) && i < l) {
      current = parts[i];
      i += 1;
    }

    if (typeof obj === 'object') {
      return obj[last];
    }
    return obj;
  }
  throw new Error('parts is not valid array');
};

function TableBodyCustom({
  rows, rowsPerPage, page, tableBodies,
}) {
  const classes = useStyles();
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  return (
    <>
      {(rows && rowsPerPage > 0
        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        : rows
      ).map((row) => (
        <TableRow key={row.id}>
          {tableBodies.map((body) => (typeof body === 'string' ? (
            <TableCell key={body} className={classes.tableCell}>
              {getProperty(row, body)}
            </TableCell>
          ) : (
            <TableCell key={body} className={classes.tableCell}>
              {(body.type && (

                <CardMedia
                  sx={{ maxWidth: 90, borderRadius: 1 }}
                  component="video"
                  autoPlay
                  controls
                  src="../../assets/image/sample.mp4"
                />
              ))}
              {body.icon}
            </TableCell>
          )))}
        </TableRow>
      ))}
      {emptyRows > 0 && (
        <TableRow style={{ height: 53 * emptyRows }}>
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </>
  );
}
export default TableBodyCustom;
