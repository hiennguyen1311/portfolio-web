import { Typography, TypographyProps } from '@mui/material';

interface Props extends TypographyProps {
  children: string;
}

export default function TextError({ children, ...props }: Props) {
  return <Typography {...props}>{children}</Typography>;
}
