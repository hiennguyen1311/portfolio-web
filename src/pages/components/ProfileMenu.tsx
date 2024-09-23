import { AccountCircle } from '@mui/icons-material';
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAuthentication } from '../hooks';

export default function ProfileMenu() {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { onLogout } = useAuthentication();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onClose = () => {
    setAnchorEl(null);
  };

  const menus = [{ title: t('profile.logout'), onClick: onLogout }];

  return (
    <Box>
      <IconButton color="inherit" onClick={handleClick}>
        <AccountCircle></AccountCircle>
      </IconButton>
      <Menu open={open} onClose={onClose} anchorEl={anchorEl}>
        {menus.map((item) => (
          <MenuItem key={item.title} onClick={item.onClick}>
            <Typography>{item.title}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
