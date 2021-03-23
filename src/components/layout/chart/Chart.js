import React from 'react';
import { connect } from 'react-redux';
import {setLoading} from '../../../actions/FormularioAction'
import indigo from '@material-ui/core/colors/indigo';
import grey from '@material-ui/core/colors/grey';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  makeStyles,
  colors
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        width:'90%',
        marginTop:'5%'
      },
    header: {
        backgroundColor:grey[100]
    },

}));

const Sales = ({ formularioReducer: { listGustoLabel,listGustoDate},setLoading,className, ...rest} ) => {

  const classes = useStyles();
  const theme = useTheme();

  const data = {
    datasets: [
      {
        backgroundColor: colors.teal[200],
        data: listGustoDate,
        label: 'Stock'
      },
    ],
    labels: listGustoLabel
  };

  const options = {
    animation: false,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          barThickness: 12,
          maxBarThickness: 10,
          barPercentage: 0.5,
          categoryPercentage: 0.5,
          ticks: {
            fontColor: theme.palette.text.secondary
          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            fontColor: theme.palette.text.secondary,
            beginAtZero: true,
            min: 0
          },
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            zeroLineColor: theme.palette.divider
          }
        }
      ]
    },
    tooltips: {
      backgroundColor: theme.palette.background.default,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  return (
    <Card
      className={clsx(classes.root,className)}
      {...rest} 
    >
      <CardHeader className={classes.header}
        title="Stock Gustos"
      />
      <Divider />
      <CardContent>
        <Box
          height={500}
          position="relative"
        >
          <Bar
            data={data}
            options={options}
          />
        </Box>
      </CardContent>
      <Divider />
      <Box
        display="flex"
        justifyContent="flex-end"
        p={2}
      >
      </Box>
    </Card>
  );
};

Sales.propTypes = {
  className: PropTypes.string
};

const mapProps = state => ({
    formularioReducer: state.formularioReducer
})

export default connect(mapProps, {setLoading})(Sales);
