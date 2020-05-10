// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/styles';

// import 'rc-slider/assets/index.css';
// import 'rc-tooltip/assets/bootstrap.css';
// import Tooltip from 'rc-tooltip';
// import Slider from 'rc-slider';

// import ToneCard from './ToneCard'

// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: 20,
//     textAlign: 'center',
//     marginBottom: 40,
//   },
//   slot: {
//     align: "center",  
//   },
//   palette: {
//     marginBottom: 50,  
//   },
// });



// class Palette extends React.Component {

//   state = {
//     // Set state values to reflect consts/props
//     slider = 0,
//   };

//   render() {
//   const { classes } = this.props;
//   return (

//     <div className={classes.root}>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <Paper className={classes.paper}>
//               Controls and UI elements for color generation.
//               <Grid container spacing={3}>
//               <Grid item xs={4} align="center">
//                   <Typography gutterBottom>
//                     Red
//                   </Typography>
//                   <Slider
//                       defaultValue={0}
//                       valueLabelDisplay="auto"
//                       step={1}
//                       marks={true}
//                       min={0}
//                       max={255}
//                   />
//                   <Typography gutterBottom>
//                     Green
//                   </Typography>
//                   <Slider
//                       defaultValue={0}
//                       valueLabelDisplay="auto"
//                       step={1}
//                       marks={true}
//                       min={0}
//                       max={255}
//                   />
//                   <Typography gutterBottom>
//                     Blue
//                   </Typography>
//                   <Slider
//                       defaultValue={0}
//                       valueLabelDisplay="auto"
//                       step={1}
//                       marks={true}
//                       min={0}
//                       max={255}
//                   />
//               </Grid>
//               <Grid item xs={4} align="center">
//                   <Typography gutterBottom>
//                     Red
//                   </Typography>
//                   <Slider
//                       defaultValue={0}
//                       valueLabelDisplay="auto"
//                       step={1}
//                       marks={true}
//                       min={0}
//                       max={255}
//                   />
//                   <Typography gutterBottom>
//                     Green
//                   </Typography>
//                   <Slider
//                       defaultValue={0}
//                       valueLabelDisplay="auto"
//                       step={1}
//                       marks={true}
//                       min={0}
//                       max={255}
//                   />
//                   <Typography gutterBottom>
//                     Blue
//                   </Typography>
//                   <Slider
//                       defaultValue={0}
//                       valueLabelDisplay="auto"
//                       step={1}
//                       marks={true}
//                       min={0}
//                       max={255}
//                   />
//               </Grid>
//               <Grid item xs={4} align="center">
//                   <Typography gutterBottom>
//                     Red
//                   </Typography>
//                   <Slider
//                       defaultValue={0}
//                       valueLabelDisplay="auto"
//                       step={1}
//                       marks={true}
//                       min={0}
//                       max={255}
//                   />
//                   <Typography gutterBottom>
//                     Green
//                   </Typography>
//                   <Slider
//                       defaultValue={0}
//                       valueLabelDisplay="auto"
//                       step={1}
//                       marks={true}
//                       min={0}
//                       max={255}
//                   />
//                   <Typography gutterBottom>
//                     Blue
//                   </Typography>
//                   <Slider
//                       defaultValue={0}
//                       valueLabelDisplay="auto"
//                       step={1}
//                       marks={true}
//                       min={0}
//                       max={255}
//                   />
//               </Grid>
//               </Grid>
//           </Paper>
//         </Grid>
//       </Grid>
//       <Grid container spacing={1} className={classes.palette}>
//         <Grid item xs={5} align="center">
//           <ToneCard color={'#F6546A'}/>
//         </Grid>
//         <Grid item xs={2} align="center">
//           <ToneCard color={'#C6E2FF'}/>
//         </Grid>
//         <Grid item xs={5} align="center">
//           <ToneCard color={'#660066'}/>
//         </Grid>
//       </Grid>
//     </div>
//   );
//   }
// }

// export default withStyles(styles)(Palette);