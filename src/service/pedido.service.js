import http from "../helpers/axiosInstance";

const seccion = 'Order';

const getAll = () => {
  return http.get(`/${seccion}`);
};


const create = data => {
  return http.post(`/${seccion}`, data);
};

const update = (data) => {
  return http.post(`/${seccion}/edit`,data);
};


const remove = (data) => {
  return http.post(`/${seccion}/deleteById`, data);
};

const PedidoService = {
  getAll,
  create,
  update,
  remove,
};

export default PedidoService;