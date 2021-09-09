import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import MUIDataTable from "mui-datatables";
import moment from 'moment';

const Table = () => {

    const { compras } = useSelector(state => state.ComprasReducer);

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
            label: "Fecha",
            name: "fecha",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value) => moment(value).format("DD/MM/YYYY"),
            }
        },
        {

            label: "Usuario",
            name: "usuario.nombre",
            options: {
                filter: true,
                sort: true,
            }
        },
        {

            label: "Telefono",
            name: "usuario.telefono",
            options: {
                filter: false,
                sort: true,
            }
        },
        {

            label: "Total",
            name: "total",
            options: {
                filter: false,
                sort: true,
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
                    title={"Ventas"}
                    data={compras}
                    columns={columns}
                    options={options}
                    className='paperSinShadow MuiTableCell'
                />
            </Grid>
        </Grid>
    );
}



export default Table;