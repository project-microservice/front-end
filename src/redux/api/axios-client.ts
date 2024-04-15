import axios from 'axios';
const { VITE_BASE_URL } = import.meta.env;

const axiosClient = axios.create({
  baseURL: VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});
// interceptor
// axiosClient.interceptors.request.use(req => {
//   const userProfileStorage = localStorage.getItem(STORAGE.USER_PROFILE);

//   if (userProfileStorage) {
//     req.headers.Authorization = `Bearer ${JSON.parse(userProfileStorage).access_token}`;
//   }

//   return req;
// });
export default axiosClient;
