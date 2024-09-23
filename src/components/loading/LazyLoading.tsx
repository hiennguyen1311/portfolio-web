import { SmartToy } from '@mui/icons-material';
import { Stack, LinearProgress, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function LazyLoading() {
  const { t } = useTranslation();

  return (
    <Stack spacing={0.5}>
      <LinearProgress
        color={'primary'}
        sx={{ height: 10, borderRadius: 8, width: '100%' }}
      ></LinearProgress>
      <LinearProgress
        color={'secondary'}
        sx={{ height: 10, borderRadius: 8, width: '90%' }}
      ></LinearProgress>
      <LinearProgress
        color={'error'}
        sx={{ height: 10, borderRadius: 8, width: '80%' }}
      ></LinearProgress>
      <LinearProgress
        color={'info'}
        sx={{ height: 10, borderRadius: 8, width: '70%' }}
      ></LinearProgress>
      <LinearProgress
        color={'success'}
        sx={{ height: 10, borderRadius: 8, width: '60%' }}
      ></LinearProgress>
      <Stack
        padding={1}
        spacing={1}
        direction={'row'}
        color={'blue'}
        alignItems={'center'}
      >
        <SmartToy></SmartToy>
        <Typography fontWeight={600} color="primary" variant="caption">
          {t('global.creating_magic')}
        </Typography>
      </Stack>
    </Stack>
  );
}
