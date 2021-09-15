import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, IconButton, Button, Chip, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import moment from 'moment';
import VisibilityIcon from '@material-ui/icons/Visibility';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';



const ViewTipoPedido = ({ nombre }) => {

    return (
        <>
            <Grid item xs={12} className="gridItem">
                <Typography variant="body" gutterBottom >
                    {nombre}
                </Typography>
            </Grid>
        </>
    )
}
export default ViewTipoPedido;