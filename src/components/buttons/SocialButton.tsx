import { Button, Typography } from '@mui/material';
import { SocialButtonProps } from './interfaces';
import { Google } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { upperFirst } from 'lodash';

export default function SocialButton({
  socialType = 'google',
  ...props
}: SocialButtonProps) {
  const { t } = useTranslation();

  function SocialIcon() {
    switch (socialType) {
      case 'google':
      default: {
        return <Google></Google>;
      }
    }
  }

  return (
    <Button endIcon={SocialIcon()} variant="contained" {...props}>
      <Typography>
        {t('authentication.sign_in_with', { value: upperFirst(socialType) })}
      </Typography>
    </Button>
  );
}
