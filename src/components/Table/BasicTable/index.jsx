/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableFooter,
  TablePagination,
} from '@material-ui/core';
import { Search, Select } from '../../Input';
import { TableBodyCustom, TablePaginationActions } from '../Common';

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
  tablePagination: {
    borderBottom: 'none',
    borderTop: '1px solid #808080',
  },
  tableHead: {
    borderTop: '1px solid #808080',
  },
  tableCell: {
    borderBottom: 'none',
    fontWeight: 600,
  },
  tableProperty: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

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
  const [rowsPerPage, setRowsPerPage] = useState(8);
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
        <Table stickyHeade elevation={0} size="small">
          <TableHead className={classes.tableHead}>
            <TableRow>
              {tableHeaders.map((header) => (
                <TableCell className={classes.tableCell}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableBodyCustom
              rows={rows}
              rowsPerPage={rowsPerPage}
              page={page}
              tableBodies={tableBodies}
            />
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                className={classes.tablePagination}
                labelRowsPerPage=""
                rowsPerPageOptions={[8, 16, { label: 'All', value: -1 }]}
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
