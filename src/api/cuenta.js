import axios from './axios'



export const createCuentaRequest = (cuenta) => axios.post(`/profile/cuentas`, cuenta);

export const getCuentaRequest = () => axios.get(`/profile/getcuenta`);

export const deleteCuentaRequest = (id) => axios.delete(`/profile/delete-cuenta/${id}`);

export const updateCuentaRequest = (id, user) => axios.put(`/profile/update/${id}`, user);
