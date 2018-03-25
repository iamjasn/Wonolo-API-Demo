import { GOOGLE_API_KEY } from './api-keys';

export const BASE_URL = 'https://test.wonolo.com/api_v2/';
export const LOCATION_REQUEST = `https://www.googleapis.com/geolocation/v1/geolocate?key=${GOOGLE_API_KEY}`;
export const REVERSE_GEOCODE_REQUEST = `https://maps.googleapis.com/maps/api/geocode/json?key=${GOOGLE_API_KEY}&result_type=administrative_area_level_1&latlng=`;