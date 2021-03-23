import React from 'react';
import { connect } from 'react-redux';
import {Grid,makeStyles} from '@material-ui/core';
import MUIDataTable from "mui-datatables";

const useStyles = makeStyles((theme) => ({
    root: {
        width:'70%',
        marginTop:'5%'
      },

}));

const Table = ({ comprasReducer: { columna, options,compras }}) => {
    const classes = useStyles();
    return (
        <Grid
         className={classes.root}
        >
        <MUIDataTable 
        title={"Ventas"} 
        data={compras} 
        columns={columna} 
        options={options} 
        />
        </Grid>
    );
}

const mapProps = state => ({
    comprasReducer: state.comprasReducer
})

export default connect(mapProps, {})(Table);