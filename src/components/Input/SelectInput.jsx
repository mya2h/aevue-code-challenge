/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Select, MenuItem, FormControl, InputLabel,
} from '@mui/material';

const useStyles = makeStyles({
  select: {
    backgroundColor: '#eeeeee',
    borderColor: 'inherit !important',
  },
});

function SelectItem({
  value, label, options, handleChange,
}) {
  const classes = useStyles();
  return (
    <FormControl size="small">
      <InputLabel>{label}</InputLabel>
      <Select
        className={classes.select}
        value={value}
        label={label}
        onChange={handleChange}
      >
        {options.map((option) => (
          <MenuItem value={option.value}>{option.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
export default SelectItem;
