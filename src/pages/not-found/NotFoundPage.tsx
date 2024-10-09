import { routeList } from '@constants';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { amber, teal } from '@mui/material/colors';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Paper
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        height: '100vh',
        width: '100%',
        display: 'flex',
        backgroundColor: teal[900],
      }}
    >
      <Box padding={1} display={'flex'}>
        <Stack
          alignItems={'center'}
          justifyContent={'center'}
          alignContent={'center'}
        >
          <Typography
            sx={{
              fontWeight: 800,
              color: amber[700],
              fontSize: 300,
              textAlign: 'center',
              fontFamily: 'monospace',
              lineHeight: 0.75,
            }}
          >
            {'404'}
          </Typography>
          <Typography
            sx={{
              fontWeight: 800,
              fontFamily: 'sans-serif',
              color: amber[700],
              textAlign: 'center',
              fontSize: 50,
            }}
          >
            {t('global.page_not_found').toUpperCase()}
          </Typography>

          <Button
            sx={{
              background: amber[700],
              fontWeight: 800,
              paddingLeft: 2,
              paddingRight: 2,
              color: 'black',
              width: 150,
            }}
            onClick={() => navigate(routeList.home)}
          >
            {t('home.go_to_home')}
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
}
