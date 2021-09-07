import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, getChart } from '../../../actions/ChartActions'
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
    width: '90%',
    marginTop: '5%'
  },
  header: {
    backgroundColor: grey[100]
  },

}));

const Sales = () => {
  const dispatch = useDispatch();

  const { listGustoLabel, listGustoDate } = useSelector(state => state.ChartReducer);
  const { gustos } = useSelector(state => state.FormularioReducer);
  
  useEffect(() => {
    dispatch(setLoading());
    dispatch(getChart(gustos));
  }, []);

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
    <>
      <Bar
        data={data}
        options={options}
      />
    </>
  );
};

Sales.propTypes = {
  className: PropTypes.string
};

export default Sales;