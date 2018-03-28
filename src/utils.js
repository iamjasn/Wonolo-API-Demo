import * as qs from 'qs';
import axios from 'axios';

import { API_KEY, SECRET_KEY } from './api-keys';
import { BASE_URL } from './constants';

const getAuthToken = axios.post(
  `${BASE_URL}authenticate`,
  qs.stringify({ api_key: API_KEY, secret_key: SECRET_KEY })
).then(res => res.data.token)

const getJobRequests = (token) => {
  return axios.get(`${BASE_URL}job_requests?token=${token}`)
  .then(data => data);
}

export { getAuthToken, getJobRequests };