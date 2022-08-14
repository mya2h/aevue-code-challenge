/* eslint-disable no-param-reassign */
/* eslint-disable no-cond-assign */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Search from '../../Input/SearchInput';

// const options = [
//   {
//     name: 'Last 7 days',
//     values: '7 days',
//   },
// ];
const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: '1%',
  },
  container: {
    maxHeight: 440,
    marginTop: '1%',
  },
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

    while ((obj = obj[current]) && i < l) {
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

function BasicTable({ data, tableHeaders, tableBodies }) {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [searched, setSearched] = useState('');

  useEffect(() => {
    if (data) {
      setRows(data);
    }
  }, [data]);

  const requestSearch = (searchedVal) => {
    const filteredRows = data.filter((row) => row.name
      .toLowerCase()
      .includes(searchedVal
        .toLowerCase()));
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched('');
    requestSearch(searched);
  };

  return (
    <Paper className={classes.root}>
      <Search
        value={searched}
        onChange={(searchVal) => requestSearch(searchVal)}
        onCancelSearch={() => cancelSearch()}
      />
      <TableContainer
        className={classes.container}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {tableHeaders.map((header) => (
                <TableCell className={classes.tableCell}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows && rows.map((data) => (
              <TableRow key={data.id}>
                {tableBodies.map((body) => (typeof body === 'string' ? (
                  <TableCell key={body} className={classes.tableCell}>
                    {getProperty(data, body)}
                  </TableCell>
                ) : (
                  <TableCell key={body} className={classes.tableCell}>
                    {body.icon}
                  </TableCell>
                )))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default BasicTable;
