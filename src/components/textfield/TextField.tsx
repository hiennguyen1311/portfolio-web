import MuiTextField, { TextFieldProps } from '@mui/material/TextField';

export default function TextField(props: TextFieldProps) {
  return <MuiTextField {...props}>{props.children}</MuiTextField>;
}
