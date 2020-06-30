import axios from 'axios';
import {rapidAPIHost, rapidAPIKey} from './app.json';

export function initAxiosSettings() {
  function showLoadingSpinner() {
    console.log('show');
  }

  function hideLoadingSpinner() {
    console.log('hide');
  }

  axios.defaults.headers['X-RapidAPI-Host'] = rapidAPIHost;
  axios.defaults.headers['X-RapidAPI-Key'] = rapidAPIKey;
  axios.interceptors.request.use(config => {
    showLoadingSpinner();
    return config;
  });
  axios.interceptors.response.use(response => {
    hideLoadingSpinner();
    return response;
  });
}
