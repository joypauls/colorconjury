import React from 'react';
import logo from './logo.svg';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';

import AppMenu from './components/AppMenu'
import Palette from './components/Palette'

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'made with ❤ by '}
      <Link color="inherit" href="https://material-ui.com/">
        joypauls
      </Link>
    </Typography>
  );
}

function App() {
  return (
    <div>
        <AppMenu/>
        <div style={{ padding: 40 }}>
            <Palette/>
        </div>
        <footer>
        <Container maxWidth="sm">
          <MadeWithLove />
        </Container>
        </footer>
    </div>
  );
}

export default App;
