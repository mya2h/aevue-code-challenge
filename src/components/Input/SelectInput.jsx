/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import {
  Select, MenuItem, FormControl, InputLabel,
} from '@mui/material';

function SelectItem({
  value, label, options, handleChange,
}) {
  return (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <Select
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
