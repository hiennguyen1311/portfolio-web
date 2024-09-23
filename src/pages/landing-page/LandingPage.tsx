import {
  Box,
  Button,
  Divider,
  Grid2,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';
import { Loading, PasswordInput, SocialButton, Title } from '@components';
import { FormProvider } from 'react-hook-form';
import { color } from '@themes';
import useLogin from './useLogin';

export default function LandingPage() {
  const { t } = useTranslation();
  const {
    methods,
    isLoading,
    isError,
    errors,
    loginHandle,
    register,
    isValid,
  } = useLogin();

  return (
    <FormProvider {...methods}>
      <Box sx={styles.container}>
        <Paper sx={styles.card}>
          <Grid2 container spacing={1}>
            <Grid2 size={{ xs: 12, md: 6, lg: 6 }}>
              <Stack
                rowGap={2}
                padding={2}
                sx={{ borderRight: `1px solid ${color.border}` }}
              >
                <TextField
                  style={{ width: '100%' }}
                  placeholder={t('authentication.email')}
                  {...register('username', { required: true })}
                  helperText={errors.username?.message}
                ></TextField>
                <PasswordInput
                  style={{ width: '100%' }}
                  placeholder={t('authentication.password')}
                  {...register('password', { required: true })}
                  inputProps={{
                    ...register('password', { required: true }),
                  }}
                  helperText={errors.password?.message}
                ></PasswordInput>

                <Button
                  disabled={isLoading || !isValid}
                  onClick={loginHandle}
                  variant="contained"
                >
                  {isLoading ? <Loading></Loading> : t('authentication.login')}
                </Button>

                {isError && (
                  <Box>
                    <Typography>{t('authentication.failed')}</Typography>
                  </Box>
                )}

                <Divider sx={{ width: '100%' }}></Divider>

                <SocialButton sx={{ width: '100%' }}></SocialButton>
              </Stack>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6, lg: 6 }}>
              <Box padding={1}>
                <Title variant="caption">{t('global.app_name')}</Title>
              </Box>
            </Grid2>
          </Grid2>
        </Paper>
      </Box>
    </FormProvider>
  );
}
