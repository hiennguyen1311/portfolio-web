import { Box } from '@mui/material';
import { ContainerProps } from './interfaces';

export default function Container(props: ContainerProps) {
  return (
    <Box
      sx={{
        flexDirection: 'column',
        display: 'flex',
        height: '90vh',
      }}
    >
      {props.children}
    </Box>
  );
}
