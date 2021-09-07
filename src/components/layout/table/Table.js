import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Grid, makeStyles } from '@material-ui/core';
import MUIDataTable from "mui-datatables";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '70%',
        marginTop: '5%'
    },

}));

const Table = () => {
    const dispatch = useDispatch();

    const { columna, options, compras } = useSelector(state => state.ComprasReducer);
    const classes = useStyles();

    return (
        <Grid className={classes.root}>
            <MUIDataTable
                title={"Ventas"}
                data={compras}
                columns={columna}
                options={options}
            />
        </Grid>
    );
}



export default Table;