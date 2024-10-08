import { contactData } from '@data';
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
    <Box sx={{ width: '100%', background: teal[900], height: '100vh' }}>
      <Box sx={{ backgroundColor: amber[50] }} padding={3}>
        <Grid2 container spacing={2}>
          {contactData.data.map((item) => (
            <Grid2 size={{ xs: 12, md: 6, sm: 6, lg: 4, xl: 4 }}>
              <Box sx={{ background: teal[900], borderRadius: 4, padding: 2 }}>
                <Stack spacing={1}>
                  <Stack direction={'row'} spacing={1} alignItems={'center'}>
                    {<item.icon sx={{ color: amber[700] }}></item.icon>}
                    <Typography
                      sx={{
                        color: amber[700],
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
                        backgroundColor: amber[700],
                        height: 25,
                        paddingLeft: 2,
                        paddingRight: 2,
                      }}
                      onClick={() => onNavigate(item.content)}
                    >
                      <Typography
                        sx={{
                          color: 'black',
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
      </Box>
    </Box>
  );
}
