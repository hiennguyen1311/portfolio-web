import { MessageRoleEnums, dateFormat } from '@constants';
import { formatDate, isSameDate } from '@utils';
import { Message } from '@models';
import { Box, Divider, Stack, Typography, useTheme } from '@mui/material';

interface Props {
  item: Message;
  previous?: string;
}

export default function MessageItem({ item, previous }: Props) {
  const isGuest = item.role !== MessageRoleEnums.USER;
  const isSame = previous ? isSameDate(item.createdAt, previous) : false;
  const theme = useTheme();

  return (
    <Box sx={{ width: '100%' }}>
      <Stack width={'100%'} spacing={2}>
        {!isSame && (
          <Stack
            direction={'row'}
            spacing={2}
            width={'100%'}
            justifyContent={'center'}
            alignContent={'center'}
            alignItems={'center'}
          >
            <Divider sx={{ flex: 1 }}></Divider>

            <Typography>
              {formatDate(item.createdAt, dateFormat.ddDDMMMMYYYY)}
            </Typography>

            <Divider sx={{ flex: 1 }}></Divider>
          </Stack>
        )}

        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: isGuest ? 'flex-start' : 'flex-end',
          }}
        >
          <Stack
            direction={'column'}
            alignItems={isGuest ? 'flex-start' : 'flex-end'}
          >
            <Box
              sx={{
                padding: 2,
                borderRadius: theme.spacing(2),
                maxWidth: '80%',
                backgroundColor: theme.palette.primary.light,
                ...(isGuest
                  ? {
                      background: theme.palette.background.paper,
                      border: `1px solid ${theme.palette.divider}`,
                    }
                  : {}),
              }}
            >
              <Typography
                sx={{
                  color: !isGuest ? theme.palette.common.white : undefined,
                }}
              >
                {item.content}
              </Typography>
            </Box>
            <Box paddingLeft={2} paddingRight={2}>
              <Typography variant="caption">
                {formatDate(item.createdAt, dateFormat.hhmmA)}
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
