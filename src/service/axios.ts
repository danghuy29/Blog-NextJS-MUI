import axios from "axios";
// const controller = new AbortController();
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
const axiosService = axios.create({
  baseURL: process.env.apiUrl,
  headers: {
    "content-type": "application/json",
  },
  // signal: controller.signal,
  cancelToken: source.token,
});
axiosService.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
// axiosService.defaults.timeout = 400;
// Add a response interceptor
axiosService.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
export const cancelApi = () => {
  // controller.abort();
  source.cancel("Operation canceled by the user.");
};
export default axiosService;
