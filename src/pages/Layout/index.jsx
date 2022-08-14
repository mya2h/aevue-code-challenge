import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import {
  Box, Toolbar, Container,
} from '@mui/material';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import AssessmentIcon from '@material-ui/icons/Assessment';
import Dashboard from '../Dashboard';
import { SideNav, TopBar } from '../../components/Nav';

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
        <TopBar />
        <Drawer variant="permanent" open>
          <Toolbar />
          <SideNav lists={lists} />
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
          <Container sx={{ mt: 4, mb: 4 }}>
            <Dashboard />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
export default Layout;
