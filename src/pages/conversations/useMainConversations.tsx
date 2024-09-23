import { yupResolver } from '@hookform/resolvers/yup';
import { useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const defaultValues = {
  userMessage: '',
};

export default function useMainConversation() {
  const theme = useTheme();
  const media = useMediaQuery(theme.breakpoints.up('md'));
  const [open, setOpen] = useState(media);
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(
      yup.object().shape({ userMessage: yup.string().required() }),
    ),
  });
  const {
    formState: { isValid },
    register,
    setValue,
    watch,
  } = methods;
  const [editting, setEditting] = useState(-1);

  const onClose = () => setOpen(false);

  const onOpen = () => setOpen(true);

  const onClearMessage = () => setValue('userMessage', '');

  return {
    sidebar: {
      open,
      onClose,
      onOpen,
    },
    isValid,
    register,
    methods,
    onClearMessage,
    values: watch(),
    editting,
    setEditting,
  };
}
