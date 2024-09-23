import { Backdrop, CircularProgress } from '@mui/material';

interface Props {
  open: boolean;
  handleClose?(): void;
  children?: React.ReactNode;
}

export default function LoadingContainer({
  open,
  children,
  handleClose,
}: Props) {
  return (
    <>
      {children}
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}
