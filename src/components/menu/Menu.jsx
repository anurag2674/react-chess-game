import './menu.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ChessRules from './Rules';
import About from './About';
const Menu = () => {
  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  };
  const [open, setOpen] = React.useState(false);
  const [openRulesDialog, setOpenRulesDialog] = useState(false);
  const handleClickOpen = (component) => {
    setOpenRulesDialog(component === 'rules' ? true : false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="flex col center alignCenter rowgp20 menuPanel">
      <Dialog open={open} onClose={handleClose} aria-labelledby="dialog-title" aria-describedby="dialog-description">
        <DialogTitle id="dialog-title">{openRulesDialog ? <>Rules of Chess</> : <>About me</>}</DialogTitle>

        <DialogContent>
          <DialogContentText id="dialog-description">{openRulesDialog ? <ChessRules /> : <About />}</DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Button variant="contained" onClick={() => routeChange('game')}>
        Start Game
      </Button>
      <Button variant="contained" onClick={() => handleClickOpen('rules')}>
        Rules of Chess
      </Button>
      <Button variant="contained" onClick={() => handleClickOpen('about')}>
        About the game
      </Button>
    </div>
  );
};
export default Menu;
