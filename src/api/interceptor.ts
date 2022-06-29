import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
// import { useUserStore } from '@/store';
// import { getToken } from '@/utils/auth';

export interface HttpResponse<T = unknown> {
  status: number;
  message: string;
  code: number;
  data: T;
}
export interface Data {
    code?: number;
    message: string
}

if (import.meta.env.VITE_API_BASE_URL) {
  axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
}

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => config,
  (error) =>
    // do something
    // eslint-disable-next-line implicit-arrow-linebreak
    Promise.reject(error),

);
// add response interceptors
axios.interceptors.response.use(
  (response: AxiosResponse<HttpResponse>) => {
    const res = response.data;
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 200) {
      alert(res.message || 'Error');
      return Promise.reject(new Error(res.message || 'Error'));
    }
    console.info(res)
    return res;
  },
  (error) => {
    const { response } = error;
    const data = response.data as Data;
    alert(data.message || error.message || 'Error');
    return Promise.reject(error);
  },
);
