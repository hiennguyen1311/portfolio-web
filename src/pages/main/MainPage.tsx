import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import SideBar from './components/SideBar';
import AppBar from './components/AppBar';
import useMain from './useMain';
import { Outlet } from 'react-router-dom';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  width: '100%',
  paddingTop: '70px',
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
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

      <Main open={sidebar.open}>
        <Outlet></Outlet>
      </Main>
    </Box>
  );
}
