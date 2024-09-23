import { LandingPageStyles } from './interfaces';

export const styles: LandingPageStyles = {
  card: (theme) => ({
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    [theme.breakpoints.up('md')]: {
      width: '550px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '650px',
    },
  }),
  container: {
    height: '90vh',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    display: 'flex',
  },
};
