import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Form } from '../types';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [form, setForm] = React.useState<Form>({
    username: '',
    password: '',
    apiKey: ''
  });

  const onUpdateField = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log('onUpdateField: ', event)
    const nextFormState = {
      ...form,
      [event.target.name]: event.target.value,
    };
    setForm(nextFormState);
    console.log('-> form: ', form)
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter your credentials to have some fun with Lego sets.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            name="username"
            type="username"
            fullWidth
            variant="standard"
            value={form.username}
            onChange={onUpdateField}
          />
          <TextField
            autoFocus
            margin="dense"
            id="apikey"
            label="apiKey"
            name="apiKey"
            type="password"
            fullWidth
            variant="standard"
            value={form.apiKey}
            onChange={onUpdateField}
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="password"
            name="password"
            type="password"
            fullWidth
            variant="standard"
            value={form.password}
            onChange={onUpdateField}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} variant="contained" color="success">Login</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}