import React, {useState, useCallback, useMemo, useEffect} from 'react';
import axios from 'axios';
import {rapidAPIHost, rapidAPIKey} from './app.json';

export const axiosInstance = axios.create();
axiosInstance.defaults.headers['X-RapidAPI-Host'] = rapidAPIHost;
axiosInstance.defaults.headers['X-RapidAPI-Key'] = rapidAPIKey;

//source: https://stackoverflow.com/a/59337986/3928982
export const useLoader = () => {
  const [counter, setCounter] = useState(0);
  const inc = useCallback(() => setCounter(c => c + 1), [setCounter]);
  const dec = useCallback(() => setCounter(c => c - 1), [setCounter]);

  const interceptors = useMemo(
    () => ({
      request: config => (inc(), config),
      response: response => (dec(), response),
      error: error => (dec(), Promise.reject(error)),
    }),
    [inc, dec],
  ); // create the interceptors

  useEffect(() => {
    // add request interceptors
    const reqInterceptor = axiosInstance.interceptors.request.use(
      interceptors.request,
      interceptors.error,
    );
    // add response interceptors
    const resInterceptor = axiosInstance.interceptors.response.use(
      interceptors.response,
      interceptors.error,
    );
    return () => {
      // remove all intercepts when done
      axiosInstance.interceptors.request.eject(reqInterceptor);
      axiosInstance.interceptors.response.eject(resInterceptor);
    };
  }, [interceptors]);

  return [counter > 0];
};
