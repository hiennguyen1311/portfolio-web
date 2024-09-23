import { Error } from '@mui/icons-material';
import { Stack } from '@mui/material';
import TextError from './TextError';
import { useTranslation } from 'react-i18next';

export default function ErrorView() {
  const { t } = useTranslation();

  return (
    <Stack
      sx={{ padding: 2, paddingTop: 0, width: '70%' }}
      direction={'row'}
      spacing={1}
      alignItems={'center'}
    >
      <Error color="error"></Error>
      <TextError variant="caption" color="error">
        {t('messages.error')}
      </TextError>
    </Stack>
  );
}
