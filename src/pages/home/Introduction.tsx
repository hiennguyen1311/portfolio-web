import { homeData } from '@data';
import { Box, Button, Grid2, Stack, Typography } from '@mui/material';
import { amber, teal } from '@mui/material/colors';
import { useTranslation } from 'react-i18next';

export default function Introduction() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        backgroundColor: amber[50],
        padding: 3,
        width: '100%',
        paddingBottom: 4,
      }}
    >
      <Grid2 container>
        <Grid2
          size={{ xs: 12, sm: 6, xl: 6, lg: 6 }}
          justifyContent={'center'}
          alignItems={'center'}
          alignContent={'center'}
        >
          <Stack spacing={2} alignItems={'center'}>
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: 50,
                fontFamily: 'sans-serif',
                textAlign: 'center',
              }}
            >
              {homeData.name}
            </Typography>
            <Box width={'90%'}>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: 20,
                  fontFamily: 'serif',
                  textAlign: 'justify',
                }}
              >
                {homeData.description}
              </Typography>
            </Box>
            <Button
              sx={{
                borderRadius: 15,
                backgroundColor: amber[700],
                paddingLeft: 2,
                paddingRight: 2,
              }}
            >
              <Typography sx={{ fontWeight: 600, color: 'black' }}>
                {t('home.read_more')}
              </Typography>
            </Button>
          </Stack>
        </Grid2>

        <Grid2
          size={{ xs: 12, sm: 6, xl: 6, lg: 6 }}
          justifyContent={'center'}
          alignItems={'center'}
          alignContent={'center'}
          display={'flex'}
        >
          <Box
            sx={{
              borderRadius: 5,
              width: '60%',
              aspectRatio: 1,
              backgroundColor: teal[900],
              boxShadow: `-15px 15px ${teal[800]}`,
              display: 'flex',
              padding: 4,
            }}
          >
            <Box
              sx={{
                borderRadius: '50%',
                width: '100%',
                aspectRatio: 1,
              }}
            >
              <img
                src={homeData.avatar}
                width={'100%'}
                style={{ marginTop: '-26px' }}
              ></img>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
