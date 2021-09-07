import React from 'react';
import clsx from 'clsx';
import { green, pink } from '@material-ui/core/colors';
import PropTypes from 'prop-types';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';
import BatteryCharging60Icon from '@material-ui/icons/BatteryCharging60';
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
  colors
} from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: '20%'
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
    marginLeft: 12,
  },
  pink: {
    backgroundColor: pink[500],
  },
  avatar: {
    backgroundColor: colors.indigo[600],
    height: 56,
    width: 56
  },
  avatarPesos: {
    backgroundColor: colors.red[600],
    height: 56,
    width: 56
  },
  avatarTrabajadas: {
    backgroundColor: colors.teal[600],
    height: 56,
    width: 56
  }
});

const SimpleCard = ({ Total, Title, Pesos, Trabajadas, className, ...rest }) => {
  const classes = useStyles();
  const signoPesos = "$"


  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
          spacing={3}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              {Title}
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              {(Pesos) ? signoPesos + (Total) : (Total)}
            </Typography>
          </Grid>
          <Grid item>
            {(Trabajadas) ? <Avatar className={classes.avatarTrabajadas}> <BatteryCharging60Icon /></Avatar> :
              (Pesos) ? <Avatar className={classes.avatarPesos}> <AttachMoneyIcon /> </Avatar> : <Avatar className={classes.avatar}> <InsertChartIcon /></Avatar>}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

SimpleCard.propTypes = {
  className: PropTypes.string
};

export default SimpleCard;