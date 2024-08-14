import axios from './axios'



export const createTransaccionRequest = (transaccion) => axios.post(`/profile/transaccion`, transaccion);

export const getTransaccionRequest = () => axios.get(`/profile/gettransaccion`);

export const deleteTransaccionRequest = (id) => axios.delete(`/profile/delete-transaccion/${id}`);
