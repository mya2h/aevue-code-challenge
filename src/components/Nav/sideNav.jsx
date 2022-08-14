/* eslint-disable react/prop-types */
import * as React from 'react';
import { NavLink } from 'react-router-dom';
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
  nav: {
    textDecoration: 'none',
    color: 'black',
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
      <List size="small">
        {lists.map((data) => (
          <NavLink to={data.link} className={classes.nav}>
            <ListItem
              selected={selectedIndex === data.index}
              onClick={(event) => handleListItemClick(event, data.index)}
              sx={{ fontSize: '14px' }}
            >
              <ListItemIcon>
                {data.icon}
              </ListItemIcon>
              <ListItemText primary={data.name} />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Box>
  );
}
export default SideNav;
