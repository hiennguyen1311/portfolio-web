import { Box } from '@mui/material';
import { teal } from '@mui/material/colors';

export default function HomePage() {
  return (
    <Box
      sx={{
        background: teal[900],
        width: '100%',
        height: 'calc(100vh - 70px)',
      }}
    ></Box>
  );
}
