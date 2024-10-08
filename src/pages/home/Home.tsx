import { Box } from '@mui/material';
import { teal } from '@mui/material/colors';
import Introduction from './Introduction';
import Education from './Education';
import WorkingProgress from './WorkingProgress';

export default function Home() {
  return (
    <Box sx={{ background: teal[900], width: '100%' }}>
      <Introduction></Introduction>

      <Education></Education>

      <WorkingProgress></WorkingProgress>
    </Box>
  );
}
