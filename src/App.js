import React, { useState, Component } from "react";
import './App.css';
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  Layer,
  ResponsiveContext,
  Text,
  Footer,
  Grid,
  RangeInput
} from 'grommet';
import { FormClose, Notification, Configure } from 'grommet-icons';
import Slider from "rc-slider";
// import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
// import Container from '@material-ui/core/Container';

// import AppMenu from './components/AppMenu'
// import Palette from './components/Palette'


const theme = {
  global: {
    colors: {
      brand: '#FFFFFF',
    },
    font: {
      family: 'DM Mono',
      size: '18px',
      height: '20px',
    },
  },
};

function MadeWithLove() {
  return (
    <Text align="center">
      {'made with ❤ by '}
      joypauls
    </Text>
  );
}

function Palette(props) {
  return (
    <Grid
      columns={{
        count: 3,
        size: "auto"
      }}
      gap="small"
    >
      <Box elevation="medium" background={makeRGBString(props.r, props.g, props.b)} width="medium" height="medium">Item 1</Box>
      <Box elevation="medium" background="brand" width="medium" height="medium">Item 2</Box>
      <Box elevation="medium" background="brand" width="medium" height="medium">Item 3</Box>
    </Grid>
  )
}

function SliderInput(props) {
  return (
    <RangeInput
      min={0}
      max={255}
      value={props.value}
      onChange={event => props.setValue(event.target.value)}
    />
  );
}

function makeRGBString(r, g, b) {
  return (
    `rgb(${r},${g},${b})`
  );
}

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const [valueR, setValueR] = useState(10);
  const [valueG, setValueG] = useState(10);
  const [valueB, setValueB] = useState(10);

  return (
    <Grommet theme={theme} full>

    <Box fill>
    <AppBar>
      <Heading level='3' margin='none'>color & conjury &#10024; &#128142; &#128302;</Heading>
      <Button
           icon={<Configure />}
           onClick={() => setShowSidebar(!showSidebar)}
         />
    </AppBar>
    
    <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
      <Box flex align='center' justify='center'>
      <Text>{ valueR }, { valueG }, { valueB }</Text>
        <Palette r={valueR} g={valueG} b={valueB} />
      </Box>
        <Collapsible direction="horizontal" open={showSidebar}>
           <Box
           flex
             width='medium'
             pad="small"
             background='light-2'
             elevation='small'
             align='center'
             justify='center'
           >
             <SliderInput value={valueR} setValue={setValueR} />
             <SliderInput value={valueG} setValue={setValueG} />
             <SliderInput value={valueB} setValue={setValueB} />
           </Box>
           </Collapsible>
    </Box>
  </Box>

      <Footer pad="medium">
        {/* <Container maxWidth="sm"> */}
          <MadeWithLove />
        {/* </Container> */}
        </Footer>
    </Grommet>
  );
}

export default App;
