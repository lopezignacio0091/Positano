import React from "react";
import { Grid, IconButton,Typography } from '@material-ui/core';
import MenuBookIcon from '@material-ui/icons/MenuBook';

const Card = ({ cardStyle, cantidad, descripcion,style}) => {
    return (
        <Grid className={cardStyle} >
            <Grid item xs={12} >
                <IconButton className={`icono${style}`}>
                    <MenuBookIcon fontSize="inherit" />
                </IconButton>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h3">{cantidad}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="subtitle2" >{descripcion}</Typography>
            </Grid>
        </Grid>
    )
}
export default Card;
