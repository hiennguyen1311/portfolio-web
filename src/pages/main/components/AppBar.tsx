import {
  Box,
  IconButton,
  LinearProgress,
  Stack,
  styled,
  Toolbar,
} from '@mui/material';
import { drawerWidth } from '../configs';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  onOpen?(): void;
  isLoading?: boolean;
}

const StyledAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

export default function AppBar({ open, onOpen, isLoading }: AppBarProps) {
  return (
    <StyledAppBar position="fixed" open={open}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onOpen}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
        <Box></Box>
        <Stack direction={'row'}></Stack>
      </Toolbar>
      {isLoading && (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      )}
    </StyledAppBar>
  );
}
