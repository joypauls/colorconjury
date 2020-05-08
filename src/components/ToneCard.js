import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 50,
    width: '70%',
    backgroundColor: '#F6546A',
  },
  actions: {
    backgroundColor: '#FFFFFF'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const ToneCard = props => {
  const classes = useStyles();
  const spaces = 20;

  const spaceArray = new Array(spaces).fill('a');  // need to provide dummy values
    
  return (      
    <Card className={classes.card} elevation={8} square={true} style={{backgroundColor: props.color}}>
      <CardContent>
        <div>
            {spaceArray.map(i => <br/>)}
        </div>
      </CardContent>
      <CardActions className={classes.actions}>
        <Typography>
            Color Name
        </Typography>
      </CardActions>
    </Card>
  );
}

export default ToneCard;