import {createDefaultEndpoint} from 'lib/api';

const api = createDefaultEndpoint('login');

export default {
  login: (data) => {
    return api.post('request_access', data);
  }
}
