/* eslint-disable react/prop-types */
import * as React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Box, List, ListItemIcon, ListItemText,
} from '@mui/material';
import MuiListItem from '@mui/material/ListItem';

const useStyles = makeStyles(() => ({
  listItemRoot: {
    minWidth: 220,
    marginTop: 30,
  },
}));

const ListItem = withStyles({
  root: {
    '&$selected': {
      backgroundColor: 'blue',
      color: '#3399ff',
      '& .MuiListItemIcon-root': {
        color: '#3399ff',
      },
    },
  },
  selected: {},
})(MuiListItem);

function SideNav({ lists }) {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box className={classes.listItemRoot}>
      <List>
        {lists.map((data) => (
          <ListItem
            selected={selectedIndex === data.index}
            onClick={(event) => handleListItemClick(event, data.index)}
          >
            <ListItemIcon>
              {data.icon}
            </ListItemIcon>
            <ListItemText primary={data.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
export default SideNav;
