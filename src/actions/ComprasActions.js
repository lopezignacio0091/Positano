import { LOADING, ERROR, GET_COMPRAS } from './types';
import moment from 'moment';

export const setLoading = () => {
    return {
        type: LOADING
    };
};

export const getCompras = () => async dispatch => {
    try {
        var axios = require('axios');
        var config = {method: 'get',url: 'http://localhost:24981/api/compra',headers: {}};
        axios(config)
            .then(function (response) {
                const objItemHome = [];
                let total =0;
                for (let x = 0; x < response.data.length; x++) {
                  const element = response.data[x];
                  const item = {};
                  total = total+element.total; 
                  item.Id=element.id;
                  item.Nombre=element.usuario.nombre;
                  item.Telefono=element.usuario.telefono;
                  item.Domicilio = element.usuario.domicilio;
                  item.Fecha = moment(element.fecha).format("YYYY-MM-DD");
                  item.Total = element.total;                  
                  objItemHome.push(item);
                }
                const columns = ["Id", "Nombre", "Telefono","Domicilio","Fecha","Total"];
                const options = {
                  filterType: 'checkbox',
                };
                dispatch({
                    type: GET_COMPRAS,
                    payload: {objItemHome,columns,options,total}
                });
            })
            .catch(function (error) {
                dispatch({
                    type: ERROR,
                    payload: 'Error buscando la info de Weather \n ' + error
                });
            });

    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Error buscando la info de Weather \n ' + error
        });
    };
};