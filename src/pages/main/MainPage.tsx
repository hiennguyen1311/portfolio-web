import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SideBar from './components/SideBar';
import { drawerWidth } from './configs';
import AppBar from './components/AppBar';
import useMain from './useMain';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  height: '100vh',
  width: '100%',
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
    },
  ],
}));

export default function MainPage() {
  const { sidebar } = useMain();

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        open={sidebar.open}
        onOpen={sidebar.onOpen}
      ></AppBar>

      <SideBar {...sidebar}>
        <Box></Box>
      </SideBar>

      <Main open={sidebar.open}></Main>
    </Box>
  );
}
