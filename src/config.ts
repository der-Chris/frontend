import { hashHistory } from 'react-router';

export const baseUrl = window.location.protocol + '//' + window.location.host;
export const history = hashHistory;

//export const couchUrl = baseUrl + '/couch';
export const couchUrl = '';
export const couchLocalOnly = true;

export const questionIdLength = 12;
export const questionVisibilityTokenLength = 20;