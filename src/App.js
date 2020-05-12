import React, { useState, Component } from "react";
import './App.css';
import './overrides.css';
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

import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';

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
    <Text align="center" size="small">
      {'made with ❤ by '}
      joypauls
    </Text>
  );
}


function PaletteElement(props) {

  const handleRChannel = val => {
    props.setColor({
      ...props.color, 
      r: val,
      l: clipChannel((props.color.r + props.color.g + props.color.b) / 3)
    });
  }

  const handleGChannel = val => {
    props.setColor({
      ...props.color, 
      g: val,
      l: clipChannel((props.color.r + props.color.g + props.color.b) / 3)
    });
  }

  const handleBChannel = val => {
    props.setColor({
      ...props.color, 
      b: val,
      l: clipChannel((props.color.r + props.color.g + props.color.b) / 3)
    });
  }

  const handleLChannel = val => {
    // props.setColor({
    //   r: clipChannel(props.color.r * val),
    //   g: clipChannel(props.color.g * val),
    //   b: clipChannel(props.color.b * val),
    //   l:  clipChannel((props.color.r + props.color.g + props.color.b) / 3)
    // });
    props.setColor({
      ...props.color, 
      l: clipChannel((props.color.r + props.color.g + props.color.b) / 3)
    });
  }

  return (
    <Box>
      <Box pad="small">
        <SliderInput min={0} max={255} step={1} value={props.color.r} setValue={handleRChannel} label="r" />
        <SliderInput min={0} max={255} step={1} value={props.color.g} setValue={handleGChannel} label="g" />
        <SliderInput min={0} max={255} step={1} value={props.color.b} setValue={handleBChannel} label="b" />
        <SliderInput min={0} max={255} step={1} value={props.color.l} setValue={handleLChannel} label="l" />
      </Box>
      <Box 
        elevation="medium" 
        background={ makeRGBString(props.color.r, props.color.g, props.color.b) } 
        width="medium" 
        height="medium" 
        direction="row" 
        justify="between"
        pad="xsmall"
      >
        <Text size="small">({ props.color.r }, { props.color.g }, { props.color.b })</Text>
        <Text size="small">{ makeHexString(props.color.r, props.color.g, props.color.b) }</Text>
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
      <PaletteElement color={props.color1} setColor={props.setColor1} />
      <PaletteElement color={props.color2} setColor={props.setColor2} />
      <PaletteElement color={props.color3} setColor={props.setColor3} />
    </Grid>
  )
}

function SliderInput(props) {
  return (
    <Box direction="row" align="center">
      <Text style={{marginRight: "1rem"}}>{props.label}</Text>
      <Slider min={props.min} max={props.max} step={props.step} value={props.value} onChange={val => props.setValue(val)} />
    </Box> 
  );
}


function clip(x, low, high) {
  return (
    Math.min(Math.max(x, low), high)
  );
}

function clipChannel(channel) {
  return ( clip(Math.floor(channel), 0, 255) );
}

// class Color {
//   constructor(r, g, b, setR, setG, setB) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     this.l = 1;

//     this.setR = setR;
//     this.setG = setG;
//     this.setB = setB;
//   }

//   setL(l) {
//     l = clip(l, 0.5, 1.5);
//     this.setR(clip(Math.floor(this.r * l), 0, 255));
//     this.setG(clip(Math.floor(this.b * l), 0, 255));
//     this.setB(clip(Math.floor(this.b * l), 0, 255));
//   }
// }

function makeColor(r, g, b) {
  var color = {
    r: r,
    g: g,
    b: b,
    l: clipChannel((r + g + b) / 3)
  };
  return(color);
}

// function adjustBrightness(color, k) {
  
// }


function makeRGBString(r, g, b) {
  return (
    `rgb(${r},${g},${b})`
  );
}

function makeHexString(r, g, b) {
  return (
    `#${r.toString(16).toUpperCase()}${g.toString(16).toUpperCase()}${b.toString(16).toUpperCase()}`
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

  // const [valueR, setValueR] = useState(139);
  // const [valueG, setValueG] = useState(50);
  // const [valueB, setValueB] = useState(235);

  const [color1, setColor1] = useState(makeColor(139, 50, 235));

  // const color1 = new Color(valueR, valueG, valueB, setValueR, setValueG, setValueB);

  // const [valueR2, setValueR2] = useState(255);
  // const [valueG2, setValueG2] = useState(120);
  // const [valueB2, setValueB2] = useState(145);

  const [color2, setColor2] = useState(makeColor(255, 120, 145));

  // const color2 = new Color(valueR2, valueG2, valueB2, setValueR2, setValueG2, setValueB2);

  // const [valueR3, setValueR3] = useState(205);
  // const [valueG3, setValueG3] = useState(255);
  // const [valueB3, setValueB3] = useState(60);

  const [color3, setColor3] = useState(makeColor(205, 255, 60));

  // const color3 = new Color(valueR3, valueG3, valueB3, setValueR3, setValueG3, setValueB3);


  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill>
            <AppBar>
              <Heading level='4' margin='none'>color & conjury &#128302;</Heading>
              {/* <Button
                icon={<Configure />}
                onClick={() => setShowSidebar(!showSidebar)}
              /> */}
            </AppBar>
    
            <Box direction='row' flex >
              <Box flex align='center' justify='center'>
                <Palette color1={color1} color2={color2} color3={color3} setColor1={setColor1} setColor2={setColor2} setColor3={setColor3} />
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
