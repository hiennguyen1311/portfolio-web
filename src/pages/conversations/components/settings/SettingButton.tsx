import { Menu } from '@components';
import { MenuItem } from '@models';
import { Settings } from '@mui/icons-material';
import {
  ButtonBase,
  Dialog,
  FormControl,
  ListItem,
  Select,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  model: { value: string; name: string };
  models: MenuItem[];
}

export default function SettingButton({ model, models }: Props) {
  const theme = useTheme();
  const { t } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);
  const [showModels, setShowModels] = useState(false);
  const onToggleModels = () => setShowModels(!showModels);
  const onToggleMenu = () => {
    setShowMenu(!showMenu);
    if (showMenu) {
      onToggleModels();
    }
  };
  const menus = [
    {
      title: `${t('messages.model')}: ${model.name}`,
      onClick: onToggleModels,
    },
  ];

  return (
    <>
      <Menu
        open={showMenu}
        onClose={onToggleMenu}
        onOpen={onToggleMenu}
        menus={menus}
      >
        <Settings sx={{ color: theme.palette.common.white }}></Settings>
      </Menu>
      <Dialog open={showModels} onClose={onToggleModels}>
        <Stack padding={2} minWidth={300} spacing={1}>
          <FormControl fullWidth>
            <Select value={model.value} sx={{ minWidth: 300 }}>
              {models.map((item) => (
                <ListItem>
                  <ButtonBase
                    onClick={() => {
                      item.onClick();
                      onToggleMenu();
                    }}
                  >
                    <Typography>{item.title}</Typography>
                  </ButtonBase>
                </ListItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </Dialog>
    </>
  );
}
