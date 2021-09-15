import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import MUIDataTable from "mui-datatables";
import CustomStock from './CustomStock';

const Table = () => {

    const { gustos } = useSelector(state => state.GustoReducer);

    const options = {
        selectableRows: 'none',
        download: true,
        search: true,
        print: false,
        filter: true,
        confirmFilters: false,
        viewColumns: false,
        textLabels: {
            filter: {
                all: "Todos"
            }
        },
        enableNestedDataAccess: '.',
    };

    const columns = [
        {
            label: "Nombre",
            name: "nombre",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            label: "Stock",
            name: "cantidad",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value) => <CustomStock value={value}/>
            }
        },
    ];

   
    const getMuiTheme = () =>
        createMuiTheme({
            overrides: {
                MUIDataTableToolbar: {
                    actions: {
                        display: "flex",
                        flexDirection: "row",
                        flex: "initial",
                    },
                },
                MUIDataTableHeadCell: {
                    data: {
                        color: "#002563",
                        fontFamily: "Titillium Web",
                        fontStyle: "normal",
                        fontWeight: "bold",
                        fontSize: "16px",
                    },
                },
                MUIDataTableSearch: {
                    searchIcon: {
                        display: "none",
                    },
                },
            },
        });

    return (
        <Grid container >
            <Grid item xs={12}>
                <MUIDataTable
                    title={"Gustos/Stock"}
                    data={gustos}
                    columns={columns}
                    options={options}
                    className='paperSinShadow MuiTableCell'
                />
            </Grid>
        </Grid>
    );
}



export default Table;