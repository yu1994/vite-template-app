import axios, { InternalAxiosRequestConfig } from 'axios';
import { showDialog } from 'vant';
// import { useUserStore } from '@/store';
// import { getToken } from '@/utils/auth';

export interface HttpResponse<T = unknown> {
  status: number;
  message: string;
  code: number;
  data: T;
}

if (import.meta.env.VITE_API_BASE_URL) {
  axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
}

axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => config,
  (error) =>
    // do something
    // eslint-disable-next-line implicit-arrow-linebreak
    Promise.reject(error)
);
// add response interceptors
axios.interceptors.response.use(
  (response) => {
    const res = response.data;
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 200) {
      showDialog({
        title: '提示',
        message: res.message || 'Error',
      }).then(() => {
        // on close
      });
      // alert(res.message || 'Error');
      return Promise.reject(new Error(res.message || 'Error'));
    }
    return res;
  },
  (error) => {
    // const { response } = error;
    // const data = response.data as Data;
    showDialog({
      title: '提示',
      message: error.message || 'Error',
    }).then(() => {
      // on close
    });
    return Promise.reject(error);
  }
);
