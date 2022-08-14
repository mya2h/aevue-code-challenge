/* eslint-disable no-param-reassign */
/* eslint-disable no-cond-assign */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@mui/material/CardMedia';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TablePaginationActions from './tablePagination';
import Search from '../../Input/SearchInput';
import Select from '../../Input/SelectInput';

const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: '1%',
  },
  container: {
    minHeight: 500,
    maxHeight: 550,
    marginTop: '1%',
  },
  tableCell: {
    borderBottom: 'none',
  },
  tablePagination: {
    borderBottom: 'none',
    borderTop: '1px solid #808080',
  },
  tableHead: {
    borderTop: '1px solid #808080',
  },
  tableProperty: {
    display: 'flex',
    justifyContent: 'space-between',
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

const options = [
  {
    name: 'last 7 days',
    value: 'last7days',
  },
];
function BasicTable({ data, tableHeaders, tableBodies }) {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searched, setSearched] = useState('');

  useEffect(() => {
    if (data) {
      setRows(data);
    }
  }, [data]);

  const requestSearch = (searchedVal) => {
    const filteredRows = data.filter((row) => row.title
      .toLowerCase()
      .includes(searchedVal
        .toLowerCase()));
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched('');
    requestSearch(searched);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleChange = () => {

  };

  return (
    <Paper className={classes.root} elevation={0}>
      <div className={classes.tableProperty}>
        <Search
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        />

        <Select value="last7days" label="" options={options} handleChange={handleChange} />
      </div>
      <TableContainer
        className={classes.container}
        elevation={0}
      >
        <Table stickyHeade elevation={0}>
          <TableHead className={classes.tableHead}>
            <TableRow>
              {tableHeaders.map((header) => (
                <TableCell className={classes.tableCell}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {(rows && rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((data) => (
              <TableRow key={data.id}>
                {tableBodies.map((body) => (typeof body === 'string' ? (
                  <TableCell key={body} className={classes.tableCell}>
                    {getProperty(data, body)}
                  </TableCell>
                ) : (
                  <TableCell key={body} className={classes.tableCell}>
                    {(body.type && (

                    <CardMedia
                      sx={{ maxWidth: 100 }}
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
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                className={classes.tablePagination}
                labelRowsPerPage=""
                rowsPerPageOptions={[5, 15, { label: 'All', value: -1 }]}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default BasicTable;
