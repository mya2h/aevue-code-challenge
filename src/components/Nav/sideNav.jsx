/* eslint-disable react/prop-types */
import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const useStyles = makeStyles(() => ({
  listItemRoot: {
    minWidth: 220,
    marginTop: 30,
  },
}));

export default function SelectedListItem({ lists }) {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box className={classes.listItemRoot}>
      <List component="nav">
        {lists.map((data) => (
          <ListItemButton
            selected={selectedIndex === data.index}
            onClick={(event) => handleListItemClick(event, data.index)}
            classes={{ selected: classes.active }}
          >

            <ListItemIcon>
              {data.icon}
            </ListItemIcon>
            <ListItemText primary={data.name} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
