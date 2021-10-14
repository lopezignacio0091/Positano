import { Grid, TextField, InputLabel } from '@material-ui/core';
import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CurrencyInputUtils from '../utils/currencyInput/CurrencyInputUtils';
import _ from 'lodash';
import moment from 'moment'

const CardViewCosto = () => {
    const dispatch = useDispatch();
    const { date,total } = useSelector(state => state.CostoReducer)
    return (
        <>
            <Grid item xs={12} md={12} >
                <InputLabel id="inputLabel1" className='boxLabelIngreso'>{moment(date).format('LL')}</InputLabel>
            </Grid>
            <Grid container className='rootCajaCard' direction="row" spacing={1}>
                <Grid item xs={8} md={8} className='gridItemCaja'>
                    <label className='labelInicial'>Total Ventas</label>
                </Grid>
                <Grid item xs={4} md={4} className='gridItemCaja'>
                    <TextField
                        placeholder='0,0'
                        value={total}
                        disabled
                        className='labelInicial'
                        InputProps={{
                            inputComponent: CurrencyInputUtils,
                        }}
                    />
                </Grid>
                <Grid item xs={8} md={8} className='gridItemCaja'>
                    <label className='labelCaja'>Gasto Nico</label>
                </Grid>
                <Grid item xs={4} md={4} className='gridItemCaja'>
                    <TextField
                        placeholder='0,0'
                        value={`-${800}`}
                        disabled
                        className='labelCaja'
                        InputProps={{
                            inputComponent: CurrencyInputUtils,
                        }}
                    />
                </Grid>
                <Grid item xs={8} md={8} className='gridItemCaja'>
                    <label className='labelCaja'>Gasto Helado</label>
                </Grid>
                <Grid item xs={4} md={4} className='gridItemCaja'>
                    <TextField
                        placeholder='0,0'
                        value={400}
                        disabled
                        className='labelCaja'
                        InputProps={{
                            inputComponent: CurrencyInputUtils,
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={12} className='gridItemCaja'>
                    <TextField
                        placeholder='0,0'
                        value={5000}
                        disabled
                        className='labelTotal'
                        InputProps={{
                            inputComponent: CurrencyInputUtils,
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={12} className='gridItemCaja'>
                    <label className='labelTotalCaja'>Total</label>
                </Grid>
            </Grid>
        </>
    )
}

export default CardViewCosto;