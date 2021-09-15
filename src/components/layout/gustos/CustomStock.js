import React from 'react';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const DiasRestantes = ({value}) => {

    return (
        <>
           {(value<1000) ?<span style={{'color':'red'}}>{value}<ErrorOutlineIcon/></span> : <span>{value}</span>}
        </>
    )
}
export default DiasRestantes;