import { homeData, productsData, skillData } from '@data';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid2,
  Link,
  List,
  ListItem,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { amber, teal } from '@mui/material/colors';
import { map, reverse } from 'lodash';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  hideBorder: {
    '&.MuiExpansionPanel-root:before': {
      display: 'none',
    },
  },
});

export default function WorkingProgress() {
  const { t } = useTranslation();
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Box padding={5} paddingTop={4} sx={{ backgroundColor: amber[50] }}>
      <Grid2 container rowSpacing={3}>
        <Grid2 size={{ xs: 12, sm: 12, xl: 6, lg: 6 }} paddingRight={3}>
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
        <Grid2 size={{ xs: 12, sm: 12, xl: 6, lg: 6 }} paddingLeft={2}>
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
                    {item.details && (
                      <Accordion
                        elevation={0}
                        className={classes.hideBorder}
                        style={{
                          backgroundColor: 'transparent',
                          boxShadow: 'none',
                          border: '1px solid transparent',
                        }}
                        sx={{
                          '&:before': { height: '0px' },
                        }}
                      >
                        <AccordionSummary
                          sx={{
                            border: 'none',
                            padding: 0,
                            paddingLeft: 1.5,
                            paddingRight: 1.5,
                            height: 20,
                            minHeight: 20,
                            '&.Mui-expanded': {
                              minHeight: 20,
                            },
                          }}
                        >
                          <Link
                            sx={{
                              fontSize: 15,
                              fontFamily: 'sans-serif',
                              fontWeight: 600,
                            }}
                            color={'secondary'}
                          >
                            {t('porfolio.see_details')}
                          </Link>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Box paddingLeft={2} paddingRight={2}>
                            {item.details?.map((item) => (
                              <Stack direction={'row'} spacing={1}>
                                <Box paddingTop={1}>
                                  <Box
                                    sx={{
                                      width: 5,
                                      height: 5,
                                      aspectRatio: 1,
                                      backgroundColor: teal[900],
                                    }}
                                  ></Box>
                                </Box>
                                <Typography
                                  color={'primary'}
                                  sx={{
                                    fontFamily: 'serif',
                                    fontSize: 15,
                                    textAlign: 'justify',
                                  }}
                                >
                                  {item}
                                </Typography>
                              </Stack>
                            ))}
                          </Box>
                        </AccordionDetails>
                      </Accordion>
                    )}
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
