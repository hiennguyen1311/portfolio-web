import {
  Box,
  ButtonBase,
  LinearProgress,
  Stack,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import { drawerWidth, navMenu } from '../configs';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { isEqual } from 'lodash';
import { amber, teal } from '@mui/material/colors';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  onOpen?(): void;
  isLoading?: boolean;
}

const StyledAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: teal[900],
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

export default function AppBar({ open, isLoading }: AppBarProps) {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  function NavItem(title: string, selected: boolean, key: string) {
    return (
      <ButtonBase
        key={key}
        onClick={() => navigate(`./${key}`)}
        sx={{
          textAlign: 'center',
          paddingY: 1,
          paddingX: 2,
          ...(selected && {
            backgroundColor: amber[700],
            borderRadius: 25,
            paddingX: 3,
          }),
        }}
      >
        <Typography
          sx={{
            fontWeight: '400',
            fontSize: 15,
            fontFamily: 'sans-serif',
            ...(selected && { color: 'black', fontWeight: '600' }),
          }}
        >
          {t(title)}
        </Typography>
      </ButtonBase>
    );
  }

  return (
    <StyledAppBar position="fixed" open={open}>
      <Toolbar>
        <Stack
          direction={'row'}
          sx={{
            display: 'flex',
            width: '100%',
          }}
          justifyContent={{ xs: 'center', xl: 'flex-end' }}
        >
          {navMenu.map((item) =>
            NavItem(
              item.title,
              isEqual(`/${item.key}`, location.pathname),
              item.key,
            ),
          )}
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
