import { Menu } from '@components';
import { Conversation } from '@models';
import { MoreVert } from '@mui/icons-material';
import {
  Button,
  ButtonBase,
  Dialog,
  Grid2,
  Stack,
  TextField,
  TextFieldProps,
  Typography,
  useTheme,
} from '@mui/material';
import { blue } from '@mui/material/colors';
import { MouseEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  item: Conversation;
  selected: number;
  onClick(id: number): void;
  openMenu(id: number): void;
  closeMenu(): void;
  showMenu: number;
  onUpdate(id: number, name: string): void;
  onDelete(id: number): void;
}

export default function ConversationItem({
  item,
  selected,
  onClick,
  openMenu,
  closeMenu,
  onUpdate,
  onDelete,
  showMenu,
}: Props) {
  const isSelected = selected === item.id;
  const theme = useTheme();
  const [showTool, setShowTool] = useState(isSelected);
  const { t } = useTranslation();
  const [name, setName] = useState(item.name);
  const [showUpdate, setShowUpdate] = useState(false);

  const menus = [
    {
      title: t('conversations.rename'),
      onClick: onShowUpdate,
    },
    { title: t('conversations.delete'), onClick: () => onDelete(item.id) },
  ];

  function onShowMenu(e: MouseEvent) {
    e.stopPropagation();
    openMenu(item.id);
  }

  function onCloseUpdate() {
    setShowUpdate(false);
    setName(item.name);
  }

  function onShowUpdate() {
    setShowUpdate(true);
  }

  const onChangeName: TextFieldProps['onChange'] = (e) => {
    setName(e.target.value.trim().replace('\n', ''));
  };

  function onUpdateHandle() {
    onCloseUpdate();
    onUpdate(item.id, name);
  }

  return (
    <ButtonBase
      sx={{
        padding: 1,
        paddingLeft: 3,
        paddingRight: 3,
        width: '100%',
        borderRadius: theme.spacing(4),
        height: 40,
        background: theme.palette.background.paper,
        ...(isSelected
          ? {
              background: theme.palette.primary.main,
            }
          : {}),
        ':hover': {
          bgcolor: isSelected ? theme.palette.primary.main : blue[100],
        },
      }}
      onClick={() => onClick(item.id)}
      onMouseOver={() => setShowTool(true)}
      onMouseOut={() => setShowTool(false)}
    >
      <Stack
        direction={'row'}
        spacing={1}
        justifyContent={'space-between'}
        alignItems={'center'}
        width={'100%'}
      >
        <Typography
          sx={{ display: 'inline-block' }}
          color={isSelected ? theme.palette.common.white : undefined}
        >
          {item.name}
        </Typography>
        {showTool && (
          <Menu
            menus={menus}
            onClose={closeMenu}
            open={showMenu === item.id}
            onOpen={onShowMenu}
          >
            <MoreVert
              sx={{
                color: isSelected
                  ? theme.palette.common.white
                  : theme.palette.common.black,
              }}
            ></MoreVert>
          </Menu>
        )}
      </Stack>
      <Dialog open={showUpdate} onClose={onCloseUpdate}>
        <Stack spacing={2} padding={2} minWidth={300}>
          <TextField value={name} onChange={onChangeName}></TextField>
          <Grid2 spacing={1} container>
            <Grid2 size={{ xs: 6 }}>
              <Button fullWidth variant="outlined" onClick={onCloseUpdate}>
                {t('global.cancel')}
              </Button>
            </Grid2>
            <Grid2 size={{ xs: 6 }}>
              <Button fullWidth variant="contained" onClick={onUpdateHandle}>
                {t('global.ok')}
              </Button>
            </Grid2>
          </Grid2>
        </Stack>
      </Dialog>
    </ButtonBase>
  );
}
