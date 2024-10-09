import { homeData, productsData, skillData } from '@data';
import {
  Box,
  Grid2,
  List,
  ListItem,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { amber, teal } from '@mui/material/colors';
import { map, reverse } from 'lodash';
import { useTranslation } from 'react-i18next';

export default function WorkingProgress() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box padding={5} sx={{ backgroundColor: amber[50] }}>
      <Grid2 container>
        <Grid2 size={{ xs: 12, sm: 6, xl: 6, lg: 6 }} paddingRight={3}>
          <Stack spacing={1}>
            <Typography
              sx={{
                fontFamily: 'serif',
                fontWeight: 800,
                fontSize: 35,
                color: teal[900],
                textDecoration: 'underline',
              }}
            >
              {t('home.working_progress')}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'serif',
                fontWeight: 400,
                fontSize: 20,
                color: teal[900],
                textAlign: 'justify',
                paddingLeft: 1,
              }}
            >
              {homeData.workingDescription}
            </Typography>

            <Box></Box>

            <Typography
              sx={{
                fontFamily: 'serif',
                fontWeight: 800,
                fontSize: 35,
                color: teal[900],
                textDecoration: 'underline',
              }}
            >
              {t('porfolio.working_experience')}
            </Typography>

            <List disablePadding>
              {skillData.map((item) => (
                <ListItem disablePadding>
                  <Stack direction={'row'} spacing={1.5}>
                    <Box
                      sx={{
                        borderRadius: '50%',
                        width: 5,
                        height: 5,
                        aspectRatio: 1,
                        backgroundColor: teal[900],
                        top: '17px',
                        position: 'absolute',
                      }}
                    ></Box>
                    <Typography
                      sx={{
                        fontFamily: 'serif',
                        fontWeight: 800,
                        fontSize: 20,
                        color: teal[900],
                        lineHeight: 1.75,
                      }}
                    >
                      {item.title}
                      {':'}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: 'serif',
                        fontWeight: 400,
                        fontSize: 20,
                        color: teal[900],
                        lineHeight: 1.75,
                      }}
                    >
                      {item.content.join(', ')}
                    </Typography>
                  </Stack>
                </ListItem>
              ))}
            </List>

            <Box></Box>

            <Typography
              sx={{
                fontFamily: 'serif',
                fontWeight: 800,
                fontSize: 35,
                color: teal[900],
                textDecoration: 'underline',
              }}
            >
              {t('porfolio.product_completion')}
            </Typography>
            <Box></Box>
            <Grid2
              container
              sx={{
                overflow: 'hidden',
                borderRadius: 4,
                boxShadow: `-10px 10px ${teal[900]}`,
                border: `1px solid ${teal[900]}`,
              }}
            >
              {productsData.map((item, index) => (
                <Grid2
                  size={6}
                  padding={2}
                  height={150}
                  sx={{
                    background: theme.palette.secondary.main,
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    borderRight:
                      index % 2 === 0
                        ? `2px solid ${theme.palette.primary.main}`
                        : undefined,
                    borderTop:
                      index / 2 >= 1
                        ? `2px solid ${theme.palette.primary.main}`
                        : undefined,
                  }}
                >
                  <Stack>
                    <Typography
                      sx={{
                        fontSize: 15,
                        fontWeight: 800,
                        textAlign: 'center',
                        fontFamily: 'sans-serif',
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 40,
                        fontWeight: 800,
                        textAlign: 'center',
                        fontFamily: 'sans-serif',
                      }}
                    >
                      {item.content}
                    </Typography>
                  </Stack>
                </Grid2>
              ))}
            </Grid2>
          </Stack>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, xl: 6, lg: 6 }} paddingLeft={6}>
          <List disablePadding>
            {map(reverse([...homeData.workingExperience]), (item, index) => (
              <ListItem key={item.year} disablePadding>
                <Stack spacing={3} direction={'row'}>
                  <Stack alignItems={'center'} spacing={1} paddingBottom={1}>
                    <Typography
                      sx={{
                        fontFamily: 'sans-serif',
                        fontWeight: 800,
                        fontSize: 30,
                        color: teal[900],
                        textAlign: 'justify',
                      }}
                    >
                      {item.year}
                    </Typography>

                    {index >= 0 && (
                      <Box
                        sx={{
                          backgroundColor: teal[900],
                          width: '2px',
                          height: '100%',
                        }}
                      ></Box>
                    )}
                    {index == homeData.workingExperience.length - 1 && (
                      <Box
                        sx={{
                          borderRadius: '50%',
                          width: 10,
                          height: 10,
                          aspectRatio: 1,
                          backgroundColor: teal[900],
                          top: '40px',
                        }}
                      ></Box>
                    )}
                  </Stack>

                  <Stack spacing={1} paddingTop={'1px'}>
                    <Typography
                      sx={{
                        fontFamily: 'sans-serif',
                        fontWeight: 800,
                        fontSize: 25,
                        color: teal[900],
                        textAlign: 'justify',
                      }}
                    >
                      {item.companyName}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: 'sans-serif',
                        fontWeight: 600,
                        fontSize: 15,
                        color: teal[900],
                        textAlign: 'justify',
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Stack direction={'row'} spacing={1}>
                      <Box sx={{ paddingTop: 1.25 }}>
                        <Box
                          sx={{
                            borderRadius: '50%',
                            width: 5,
                            height: 5,
                            aspectRatio: 1,
                            backgroundColor: teal[900],
                          }}
                        ></Box>
                      </Box>
                      <Typography
                        sx={{
                          fontFamily: 'serif',
                          fontWeight: 400,
                          fontSize: 15,
                          color: teal[900],
                          textAlign: 'justify',
                        }}
                      >
                        {item.content}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </ListItem>
            ))}
          </List>
        </Grid2>
      </Grid2>
    </Box>
  );
}