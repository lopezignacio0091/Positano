import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';



const ViewTipoPedido = ({ nombre }) => {

    return (
        <>
            <ListItem button>
                <ListItemIcon>
                    <PersonIcon />
                </ListItemIcon>
                <ListItemText  className='labelName' primary={nombre} />
            </ListItem>
        </>
    )
}
export default ViewTipoPedido;