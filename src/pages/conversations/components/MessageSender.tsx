import {
  Button,
  IconButton,
  OutlinedInput,
  Stack,
  useTheme,
} from '@mui/material';
import { AddCircle, Cancel, Image, Send } from '@mui/icons-material';
import { UseFormRegisterReturn } from 'react-hook-form';

interface Props {
  disabled?: boolean;
  onClearMessage(): void;
  onSubmit(): void;
  message: string;
  register: UseFormRegisterReturn<'userMessage'>;
}

export default function MessageSender({
  disabled,
  onClearMessage,
  message,
  onSubmit,
  register,
}: Props) {
  const theme = useTheme();

  return (
    <Stack
      padding={2}
      direction={'row'}
      justifyContent={'center'}
      spacing={2}
      sx={{
        bottom: 0,
        width: `calc(100%)`,
        alignItems: 'center',
      }}
    >
      <OutlinedInput
        sx={{
          width: '100%',
          maxWidth: '800px',
          background: theme.palette.background.paper,
        }}
        multiline={true}
        maxRows={3}
        endAdornment={
          message && (
            <IconButton onClick={onClearMessage} sx={{ padding: 0 }}>
              <Cancel></Cancel>
            </IconButton>
          )
        }
        onChange={register.onChange}
        inputProps={{
          ...register,
          onKeyDown: (e) => {
            if (e.code === 'Enter' && !disabled) {
              e.preventDefault();
              onSubmit();
            }
          },
        }}
      ></OutlinedInput>

      <IconButton>
        <AddCircle></AddCircle>
      </IconButton>

      <IconButton>
        <Image></Image>
      </IconButton>

      <Button
        disabled={disabled}
        onClick={onSubmit}
        startIcon={<Send></Send>}
      ></Button>
    </Stack>
  );
}
