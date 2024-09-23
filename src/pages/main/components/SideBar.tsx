import {
  CSSObject,
  Divider,
  Drawer as MuiDrawer,
  IconButton,
  Stack,
  styled,
  Theme,
  useTheme,
  Box,
} from '@mui/material';
import { SideBarProps } from './interfaces';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { drawerMinWidth, drawerWidth } from '../configs';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1.5, 2),
  justifyContent: 'space-between',
  ...theme.mixins.toolbar,
}));

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      },
    },
  ],
}));

export default function SideBar({ children, open, onClose }: SideBarProps) {
  const theme = useTheme();

  return (
    <Drawer
      anchor={'left'}
      open={open}
      onClose={onClose}
      variant="permanent"
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        width: open ? drawerWidth : drawerMinWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        '& .MuiDrawer-paper': {
          width: open ? drawerWidth : drawerMinWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <DrawerHeader>
        <Box></Box>
        <IconButton onClick={onClose}>
          {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </DrawerHeader>

      <Divider sx={{ width: '100%' }}></Divider>

      {children}

      <Stack spacing={2} padding={2}></Stack>
    </Drawer>
  );
}
