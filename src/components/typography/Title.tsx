import { Typography } from '@mui/material';
import { TitleProps } from './interfaces';

export default function Title({ children, ...props }: TitleProps) {
  return (
    <Typography {...props} sx={{ fontWeight: 600, fontSize: 20, ...props.sx }}>
      {children}
    </Typography>
  );
}
