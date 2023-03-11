import axios from 'axios';

const API = axios.create({ baseURL : 'http://localhost:3300'})

export const createUser = (newUser)=>API.post('/user',newUser);
export const updateUser = (id, updatedUser) => API.patch(`/user/${id}`,updatedUser);
export const fetchUsers = () => API.get('/user');
export const fetchUser = (id) =>API.get(`/user/email/${id}`);
export const deleteUser = (id) => API.delete(`/user/${id}`);

export const createPayment = (newPayment) => API.post('/payment',newPayment);
export const updatePayment = (id, updatedPayment) => API.patch(`/payment/${id}`,updatedPayment);
export const fetchPayments = () => API.get('/payment');
export const fetchPayment = (id) => API.get(`/payment/${id}`);
export const deletePayment = (id) => API.delete(`/payment/${id}`);

export const getBatches = () => API.get('/batch');
export const getBatch = (id) => API.get(`/batch/${id}`);