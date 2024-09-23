import {
  Button,
  Divider,
  Drawer,
  IconButton,
  Stack,
  styled,
  useTheme,
} from '@mui/material';
import { SideBarProps } from './interfaces';
import { AddCircle, ChevronLeft, ChevronRight } from '@mui/icons-material';
import { drawerWidth } from '../configs';
import { useTranslation } from 'react-i18next';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1.5, 2),
  justifyContent: 'space-between',
}));

export default function SideBar({
children,
open,
  onClose,
  onAddNew,
}: SideBarProps) {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Drawer
      anchor={'left'}
      open={open}
      onClose={onClose}
      variant="persistent"
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <DrawerHeader>
        <Button
          variant="contained"
          endIcon={<AddCircle></AddCircle>}
          sx={{ fontWeight: 600 }}
          onClick={onAddNew}
        >
          {t('main_conversations.new_conversation')}
        </Button>

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
