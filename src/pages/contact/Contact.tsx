import { contactData, homeData } from '@data';
import { Email, Smartphone } from '@mui/icons-material';
import { Box, Button, Grid2, Stack, Typography } from '@mui/material';
import { amber, teal } from '@mui/material/colors';
import { upperFirst } from 'lodash';
import { useTranslation } from 'react-i18next';

export default function ContactPage() {
  const { t } = useTranslation();

  const onNavigate = (url: string) => {
    window.open(url);
  };

  return (
    <Box
      sx={{
        width: '100%',
        background: teal[900],
        height: 'calc(100vh - 70px)',
      }}
    >
      <Box sx={{ backgroundColor: amber[50], height: '100%' }} padding={3}>
        <Stack spacing={3} alignItems={'center'}>
          <Grid2 container width={'100%'}>
            <Box
              sx={{
                backgroundColor: teal[900],
                borderRadius: 5,
                width: 200,
                aspectRatio: 1,
                boxShadow: `-5px 5px${teal[600]}`,
                marginRight: 2,
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
                display: 'flex',
              }}
            >
              <Box
                sx={{
                  borderRadius: '50%',
                  width: 150,
                  aspectRatio: 1,
                  alignItems: 'center',
                  alignContent: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                }}
              >
                <img
                  src={homeData.avatar}
                  width={150}
                  style={{ marginTop: '-10px' }}
                ></img>
              </Box>
            </Box>
            <Grid2 size={{ md: 12, xs: 12, sm: 12, lg: 6, xl: 6 }}>
              <Typography
                sx={{
                  color: amber[700],
                  fontWeight: 800,
                  fontSize: 50,
                  fontFamily: 'sans-serif',
                }}
              >
                {homeData.name}
              </Typography>
              <Stack direction={'row'} spacing={1} alignItems={'center'}>
                <Email sx={{ color: amber[700] }}></Email>
                <Typography
                  sx={{
                    color: amber[700],
                    fontWeight: 800,
                    fontSize: 20,
                    textDecoration: 'underline',
                  }}
                >
                  {contactData.email}
                </Typography>
              </Stack>
              <Stack direction={'row'} spacing={1} alignItems={'center'}>
                <Smartphone sx={{ color: amber[700] }}></Smartphone>
                <Typography
                  sx={{
                    color: amber[700],
                    fontWeight: 800,
                    fontSize: 20,
                    textDecoration: 'underline',
                  }}
                >
                  {contactData.phone}
                </Typography>
              </Stack>
            </Grid2>
          </Grid2>
          <Grid2 container spacing={2.5} width={'100%'}>
            {contactData.data.map((item) => (
              <Grid2 size={{ xs: 12, md: 6, sm: 6, lg: 4, xl: 4 }}>
                <Box
                  sx={{
                    background: amber[700],
                    borderRadius: 4,
                    padding: 2,
                    boxShadow: `-7px 7px${teal[900]}`,
                    border: `1px solid ${teal[900]}`,
                  }}
                >
                  <Stack spacing={1}>
                    <Stack direction={'row'} spacing={1} alignItems={'center'}>
                      {<item.icon></item.icon>}
                      <Typography
                        sx={{
                          fontSize: 25,
                          fontWeight: 800,
                          fontFamily: 'sans-serif',
                        }}
                      >
                        {upperFirst(item.key)}
                      </Typography>
                    </Stack>
                    <Box>
                      <Button
                        sx={{
                          backgroundColor: teal[900],
                          height: 25,
                          paddingLeft: 2,
                          paddingRight: 2,
                        }}
                        onClick={() => onNavigate(item.content)}
                      >
                        <Typography
                          sx={{
                            color: amber[700],
                            fontSize: 15,
                            fontFamily: 'sans-serif',
                            fontWeight: 600,
                          }}
                        >
                          {t('contacts.explore')}
                        </Typography>
                      </Button>
                    </Box>
                  </Stack>
                </Box>
              </Grid2>
            ))}
          </Grid2>
        </Stack>
      </Box>
    </Box>
  );
}
