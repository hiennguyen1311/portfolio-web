import { homeData, homeDataSections } from '@data';
import { Box, Button, Grid2, Stack, Typography, useTheme } from '@mui/material';
import { amber } from '@mui/material/colors';
import { t } from 'i18next';

export default function HomePage() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        height: 'calc(100vh - 70px)',
        backgroundColor: amber[50],
      }}
    >
      {/** Welcome */}
      <Box
        sx={{
          minHeight: 300,
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          p: 1,
        }}
      >
        <Stack
          sx={{
            textAlign: 'center',
          }}
          spacing={1}
        >
          <Grid2
            display={'flex'}
            direction={'row'}
            columnSpacing={1}
            justifyContent={'center'}
            container
          >
            {homeDataSections.welcome.title.map((text, index) => (
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: 40,
                  fontFamily: 'sans-serif',
                  color: index ? amber[800] : theme.palette.primary.main,
                }}
              >
                {text}
              </Typography>
            ))}
          </Grid2>
          <Stack display={'flex'} justifyContent={'center'} width={'100%'}>
            {homeDataSections.welcome.description.map((text, index) => (
              <Box display={'flex'} justifyContent={'center'}>
                <Typography
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 800,
                    fontSize: 35,
                    fontFamily: 'sans-serif',
                    background: index ? amber[800] : 'none',
                    borderRadius: index ? 4 : 0,
                    p: index ? 1 : 0,
                  }}
                >
                  {text}
                </Typography>
              </Box>
            ))}
          </Stack>
          <Box height={{ xs: 100, md: 150 }}>
            <img height={'100%'} src={homeData.avatar}></img>
          </Box>
          <Box>
            <Button sx={{ p: 2 }}>
              <Typography
                sx={{ color: theme.palette.secondary.main, fontWeight: 600 }}
              >
                {t('home.view_projects')}
              </Typography>
            </Button>
          </Box>
        </Stack>
      </Box>
      {/** WHO AM I? */}
      <Box
        sx={{
          minHeight: 300,
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.palette.primary.main,
          textAlign: 'center',
          display: 'flex',
          p: 1,
        }}
      >
        <Stack sx={{ alignItems: 'center', justifyContent: 'center' }}>
          <Typography
            sx={{
              whiteSpace: 'pre-wrap',
              color: theme.palette.secondary.main,
              fontWeight: 800,
              fontSize: 40,
              fontFamily: 'sans-serif',
            }}
          >
            {homeDataSections.aboutMe.title}
          </Typography>
          <Typography
            sx={{
              whiteSpace: 'pre-wrap',
              color: theme.palette.secondary.main,
              fontWeight: 800,
              fontSize: 15,
              fontFamily: 'sans-serif',
              textAlign: 'justify',
            }}
            maxWidth={{ xs: '80%', sm: '60%', md: '40%' }}
          >
            {homeDataSections.aboutMe.content}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
