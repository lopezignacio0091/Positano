import http from "../helpers/axiosInstance";

const seccion = 'Taste';

const getAll = () => {
  return http.get(`/${seccion}`);
};

const getById = id => {
  return http.get(`/${seccion}/getById?Id=${id}`);
};




const ProductoService = {
  getAll,
  getById,
};

export default ProductoService;