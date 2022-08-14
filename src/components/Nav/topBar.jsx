import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import {
  Avatar, Toolbar, Typography, IconButton,
} from '@mui/material';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import profileImage from '../../assets/image/profile.png';
import Search from '../Input/SearchInput';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,

}));

function TopBar() {
  return (
    <AppBar position="absolute" elevation={1} sx={{ bgcolor: 'background.paper' }}>
      <Toolbar>
        <Typography
          variant="h6"
          color="#000000"
          noWrap
          sx={{ flexGrow: 1, fontWeight: 'bold' }}
        >
          Logo
        </Typography>
        <Search />
        <IconButton>
          <Avatar alt="Remy Sharp" src={profileImage} />
          <ArrowDropDownIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
export default TopBar;
