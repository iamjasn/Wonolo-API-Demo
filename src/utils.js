import * as qs from 'qs';
import axios from 'axios';

import { API_KEY, SECRET_KEY } from './api-keys';
import { BASE_URL, LOCATION_REQUEST } from './constants';

const getAuthToken = axios.post(
  `${BASE_URL}authenticate`,
  qs.stringify({ api_key: API_KEY, secret_key: SECRET_KEY })
).then(res => res.data.token)

const getJobRequests = (token) => {
  return axios.get(`${BASE_URL}job_requests?token=${token}&state=approved`)
  .then((data) => data);
}

const getUserLocation = axios.post(LOCATION_REQUEST)
  .then(res => res.data.location)

export { getAuthToken, getUserLocation, getJobRequests };