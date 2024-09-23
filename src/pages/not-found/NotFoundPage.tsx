import { Box, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <Paper
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        height: '100vh',
        width: '100%',
        display: 'flex',
      }}
    >
      <Box padding={1}>
        <Typography>{t('global.page_not_found')}</Typography>
      </Box>
    </Paper>
  );
}
