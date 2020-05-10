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
      <SliderInput value={props.color.r} setValue={props.color.setR} />
      <SliderInput value={props.color.g} setValue={props.color.setG} />
      <SliderInput value={props.color.b} setValue={props.color.setB} />
      <Box elevation="medium" background={makeRGBString(props.color.r, props.color.g, props.color.b)} width="medium" height="medium">
        <Text>{ props.color.r }, { props.color.g }, { props.color.b }</Text>
      </Box>
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
      <PaletteElement color={props.color1} />
      <PaletteElement color={props.color2} />
      <PaletteElement color={props.color3} />
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

  const [valueR2, setValueR2] = useState(10);
  const [valueG2, setValueG2] = useState(10);
  const [valueB2, setValueB2] = useState(10);

  const color2 = new Color(valueR2, valueG2, valueB2, setValueR2, setValueG2, setValueB2);

  const [valueR3, setValueR3] = useState(10);
  const [valueG3, setValueG3] = useState(10);
  const [valueB3, setValueB3] = useState(10);

  const color3 = new Color(valueR3, valueG3, valueB3, setValueR3, setValueG3, setValueB3);


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
                <Palette color1={color1} color2={color2} color3={color3} />
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
