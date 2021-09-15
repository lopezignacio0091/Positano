import http from "../helpers/axiosInstance";

const seccion = 'Order';

const getAllDate = () => {
  return http.get(`/${seccion}/getDate`);
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

const delivered  = (data) => {
  return http.post(`/${seccion}/UpdateStatus`, data);
}

const PedidoService = {
  create,
  update,
  remove,
  getAllDate,
  delivered
};

export default PedidoService;