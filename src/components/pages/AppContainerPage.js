import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Drawer, AppBar, Toolbar, List, ListItemIcon, Grid, Divider, CssBaseline, ListItem, ListItemText, Button } from '@material-ui/core'
import clsx from 'clsx';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, useRouteMatch, Switch, Route, Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import WebIcon from '@material-ui/icons/Web';
import TelegramIcon from '@material-ui/icons/Telegram';
import AppRoute from '../../route/AppRoute';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import '../../themes/Nav.css';
import Logo from '../../img/positanoLogo.jpg';


const AppContainerPage = () => {

    let url = '';
    return (
        <div className="root">
            <CssBaseline />
            <AppBar >
                <Toolbar className='NavBarTransaccion'>
                    <Grid justify="space-between" container>
                        <Grid item>
                           
                        </Grid>
                        <Grid item>
                            <Button
                                startIcon={<AccountBoxIcon />}
                            >
                                {"Hola Admin"}
                            </Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" className='drawer'>
                <Grid container className='rootNav'>
                    <Grid item xs={12} md={12}>
                        <h4 className='titleSistema'>
                            Positano
                         </h4>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <List>
                            <ListItem button component={Link} to='/' >
                                <ListItemIcon ><AccountBalanceIcon className='icono' /></ListItemIcon>
                                <ListItemText className='titleLink' primary="Home" />
                            </ListItem>
                        </List>
                    </Grid>
                    <Divider className='divider' />
                    <Grid item xs={12} md={12}>
                        <List>
                            <label className='label'>COMPRA/VENTA</label>
                            <ListItem button component={Link} to={'/compras'}  >
                                <ListItemIcon ><AttachMoneyIcon className='icono' /></ListItemIcon>
                                <ListItemText className='titleLink' primary="Compras" />
                            </ListItem>
                        </List>
                    </Grid>
                    <Divider className='divider' />
                    <Grid item xs={12} md={12}>
                        <List>
                            <ListItem button component={Link} to={'/pedidos'}   >
                                <ListItemIcon><TelegramIcon className='icono'/></ListItemIcon>
                                <ListItemText className='titleLink'>Pedidos</ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Divider className='divider' />
                    <Grid item xs={12} md={12}>
                        <List>
                            <ListItem button component={Link} to={'/gustos'} >
                                <ListItemIcon ><SyncAltIcon className='icono' /></ListItemIcon>
                                <ListItemText className='titleLink' >Stock</ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Drawer>
            <main className='content'>
                <div className="toolbar" />
                <Grid container>
                    <AppRoute />
                </Grid>
            </main>

        </div>
    );
}

export default AppContainerPage;