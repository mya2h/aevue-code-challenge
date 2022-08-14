/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from 'material-ui-search-bar';
import '../../assets/styles/component.css';

const useStyles = makeStyles({
  searchBar: {
    width: 300,
    height: 40,
    boxShadow: 'none',
    backgroundColor: '#eeeeee',
  },
});

function Search({ searched, onChange, onCancelSearch }) {
  const classes = useStyles();
  return (
    <SearchBar
      className={classes.searchBar}
      value={searched}
      onChange={onChange}
      onCancelSearch={onCancelSearch}
    />
  );
}
export default Search;
