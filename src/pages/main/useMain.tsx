import { useState } from 'react';

export default function useMain() {
  const [open, setOpen] = useState(false);

  const onClose = () => setOpen(false);

  const onOpen = () => setOpen(true);

  return {
    sidebar: {
      open,
      onClose,
      onOpen,
    },
  };
}
