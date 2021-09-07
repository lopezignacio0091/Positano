import React from 'react'
import { Grid, Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import Helado from '../../../img/heladoColor.png';

const CustomGusto = ({ name, accion, seleccionado }) => {
    return (
        <>
            <ListItem onClick={accion} >
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={Helado} style={{'width': '70%','height': '70%'}} />
                </ListItemAvatar>
                <ListItemText primary={name} />
            </ListItem>
        </>
    )
}
export default CustomGusto;