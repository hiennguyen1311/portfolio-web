import { homeData } from '@data';
import {
  Box,
  Divider,
  Grid2,
  List,
  ListItem,
  Stack,
  Typography,
} from '@mui/material';
import { amber, teal } from '@mui/material/colors';
import { useTranslation } from 'react-i18next';

export default function Education() {
  const { t } = useTranslation();

  return (
    <Box padding={5}>
      <Grid2 container display={'flex'}>
        <Grid2 size={{ xs: 12, sm: 6, xl: 6, lg: 6 }}>
          <List disablePadding>
            <Grid2 container>
              {homeData.educations.map((item) => (
                <Grid2 size={{ xs: 12, sm: 6, xl: 6, lg: 6 }} paddingBottom={2}>
                  <ListItem key={item.title} disablePadding>
                    <Stack spacing={0.5}>
                      <Typography
                        sx={{
                          fontFamily: 'serif',
                          fontWeight: 800,
                          fontSize: 25,
                          color: amber[50],
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Box
                        sx={{
                          borderRadius: 25,
                          backgroundColor: amber[50],
                          width: item.year.length * 10 + 20,
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: 'serif',
                            fontWeight: 800,
                            fontSize: 15,
                            color: teal[900],
                            textAlign: 'center',
                          }}
                        >
                          {item.year}
                        </Typography>
                      </Box>
                      {item.contents.map((item) => (
                        <Typography
                          sx={{
                            fontFamily: 'serif',
                            fontSize: 15,
                            color: amber[50],
                          }}
                        >
                          {item}
                        </Typography>
                      ))}
                    </Stack>
                  </ListItem>
                </Grid2>
              ))}
            </Grid2>
          </List>
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 6, xl: 6, lg: 6 }}
          justifyContent={'flex-end'}
          display={'flex'}
        >
          <Stack spacing={1} alignContent={'flex-end'}>
            <Typography
              sx={{
                fontFamily: 'serif',
                fontWeight: 800,
                fontSize: 35,
                color: amber[50],
                textDecoration: 'underline',
                textAlign: 'right',
              }}
            >
              {t('home.education_certification')}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'serif',
                fontSize: 20,
                color: amber[50],
                textAlign: 'justify',
                direction: 'rtl',
              }}
            >
              {homeData.educatuionDescription}
            </Typography>
          </Stack>
        </Grid2>
      </Grid2>
    </Box>
  );
}
