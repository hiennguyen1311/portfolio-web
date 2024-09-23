import {
  Box,
  Menu as MuiMenu,
  MenuItem,
  Typography,
  IconButton,
} from '@mui/material';
import React from 'react';
import { MenuProps } from './interfaces';

export default function Menu({
  menus,
  children,
  onClose,
  open,
  onOpen,
}: MenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const close = () => {
    setAnchorEl(null);
    onClose();
  };

  const onOpenHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onOpen(e);
    setAnchorEl(e.currentTarget);
  };

  return (
    <Box>
      <IconButton onClick={onOpenHandle}>{children}</IconButton>
      <MuiMenu open={open} onClose={close} anchorEl={anchorEl}>
        {menus.map((item) => (
          <MenuItem key={item.title} onClick={item.onClick}>
            <Typography>{item.title}</Typography>
          </MenuItem>
        ))}
      </MuiMenu>
    </Box>
  );
}
