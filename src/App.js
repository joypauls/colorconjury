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
  rangeInput: {
    track: {
      color: "rgb(196, 196, 196)",
      height: "5px",
      extend: () => `border-radius: 10px; border-color: #000000; border-width: 2px`
    },
    thumb: {
      color: "rgb(196, 196, 196)",
      width: "8px",
      extend: () => `height: 10px`
      // borderColor: "rgb(196, 196, 196)",
      // borderWidth: "3px"
    }
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


function PaletteElement(props) {
  return (
    <Box>
      <SliderInput value={props.color1.r} setValue={props.color1.setR} />
      <SliderInput value={props.color1.g} setValue={props.color1.setG} />
      <SliderInput value={props.color1.b} setValue={props.color1.setB} />
      <Box elevation="medium" background={makeRGBString(props.color1.r, props.color1.g, props.color1.b)} width="medium" height="medium">Item 1</Box>
    </Box>
  )
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
      <PaletteElement {...props} />
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
      step={1}
      value={props.value}
      onChange={event => props.setValue(event.target.value)}
    />
  );
}


class Color {
  constructor(r, g, b, setR, setG, setB) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.setR = setR;
    this.setG = setG;
    this.setB = setB;
  }
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

  const color1 = new Color(valueR, valueG, valueB, setValueR, setValueG, setValueB);


  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill>
            <AppBar>
              <Heading level='3' margin='none'>color & conjury &#10024; &#128142; &#128302;</Heading>
              <Button
                icon={<Configure />}
                onClick={() => setShowSidebar(!showSidebar)}
              />
            </AppBar>
    
            <Box direction='row' flex >
              <Box flex align='center' justify='center'>
                <Text>{ color1.r }, { color1.g }, { color1.b }</Text>
                <Palette color1={color1} />
              </Box>
              {size !== 'small' && (
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
                  </Box>
                </Collapsible>
              )}
            </Box>
            <Footer pad="small" justify="center">
              <MadeWithLove />
            </Footer>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
