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
import { Title } from '@components';
import { useTranslation } from 'react-i18next';
import { ProfileMenu } from '../../components';
import SettingButton from './settings/SettingButton';
import { MenuItem } from '@models';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  onOpen?(): void;
  isLoading?: boolean;
  settings: { models: MenuItem[]; model: { value: string; name: string } };
}

const StyledAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
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
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

export default function AppBar({
  open,
  onOpen,
  isLoading,
  settings,
}: AppBarProps) {
  const { t } = useTranslation();

  return (
    <StyledAppBar position="fixed" open={open} settings={settings}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onOpen}
          edge="start"
          sx={[open ? { display: 'none' } : {}]}
        >
          <MenuIcon />
        </IconButton>
        <Title>{t('global.app_name')}</Title>
        <Stack direction={'row'}>
          <ProfileMenu></ProfileMenu>

          <SettingButton {...settings}></SettingButton>
        </Stack>
      </Toolbar>
      {isLoading && (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      )}
    </StyledAppBar>
  );
}
