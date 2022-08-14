import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Nav from '../../components/Nav/sideNav';
import Dashboard from '../Dashboard';
import profileImage from '../../assets/image/profile.png';

const lists = [
  {
    index: 0,
    name: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    index: 1,
    name: 'Users',
    icon: <PersonIcon />,
  },
  {
    index: 2,
    name: 'Notifications',
    icon: <NotificationsIcon />,
  },
  {
    index: 3,
    name: 'Reports',
    icon: <AssessmentIcon />,
  },
];
// const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,

}));
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  () => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
    },
  }),
);
const mdTheme = createTheme();

function Layout() {
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" elevation={1} sx={{ bgcolor: 'background.paper' }}>
          <Toolbar>
            <Typography
              component="h1"
              variant="h6"
              color="#000000"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Logo
            </Typography>
            <IconButton>
              <Avatar alt="Remy Sharp" src={profileImage} />
              <ArrowDropDownIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open>
          <Toolbar />
          <Divider />
          <Nav lists={lists} />
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) => (theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900]),
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',

          }}
        >

          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Dashboard />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
export default Layout;
