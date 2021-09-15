import React from 'react'
import Alert from '@material-ui/lab/Alert';
import styles from './styles';
export default function AlertUtils(props) {
    const classes = styles();
    return (
        <>
             <Alert severity={props.TYPE} className={classes[props.CLASS]}>{props.LABEL}</Alert>
        </>
    )
}
