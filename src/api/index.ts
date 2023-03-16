import axios from 'axios';

export function dictAPI(dictType: string) {
  return axios.get(`/system/dict/data/type/${dictType}`);
}

export function setChatCodeAPI(code: string) {
  return axios.get(`/wx/openIdInit/${code}`);
}
