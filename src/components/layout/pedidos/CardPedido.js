import React from 'react';
import { viewPedido, delivered } from '../../../actions/PedidoAction';
import { Grid, IconButton, Button, Chip, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import moment from 'moment';
import VisibilityIcon from '@material-ui/icons/Visibility';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import { useDispatch } from 'react-redux';



const CardPedido = ({ direccion, id, fecha, estado, nombre }) => {
    const dispatch = useDispatch();

    return (
        <>
            <Card variant="outlined" className='cardStyle'>
                <CardContent>
                    <Grid container alignItems="center" justify="space-between" >
                        <Grid item xs={6} className="gridItem">
                            <Typography color="textSecondary">
                                <Chip className={`chip${estado}`} label={estado} variant="outlined" />
                            </Typography>
                        </Grid>
                        <Grid container item xs={6} justify="flex-end" className="gridItem">
                            <IconButton aria-label="view" size="small">
                                <VisibilityIcon fontSize="inherit" onClick={() => { dispatch(viewPedido(id)) }} />
                            </IconButton>
                        </Grid>
                        <Grid item xs={12} className="gridItemContaienr" alignContent="center" container direction="row" justify="center">
                            <Typography variant="h6"  >
                                {nombre}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} className="gridItem" alignContent="center" container direction="row" justify="center">
                            <Typography variant="subtitle2" gutterBottom >
                                {direccion}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} className="gridItem" alignContent="center" container direction="row" justify="center">
                            <Typography className='date' variant="overline" color="textSecondary">
                                {moment(fecha).format('llll')}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} className="gridItemContaienr" alignContent="center" container direction="row" justify="center">
                           {(estado === "Pending") &&
                           <Button onClick={() => {dispatch(delivered({ 'OrderId': id }))}} 
                           variant="contained" 
                           startIcon={<MotorcycleIcon />}>Entregado</Button>}
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
        </>
    )
}
export default CardPedido;