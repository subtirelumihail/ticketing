/*global fetch*/
import config from 'config'
import 'whatwg-fetch'

export const createDefaultEndpoint = (name) => {
  const url = config[process.env.NODE_ENV].api + name
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  return {
    get: (endpoint) => {
      return fetch(`${url}/${endpoint}`, {
        method: 'GET',
        headers: headers,
        mode: 'cors'
      })
    },

    post: (endpoint, data) => {
      return fetch(`${url}/${endpoint}`, {
        method: 'POST',
        headers: headers,
        mode: 'cors',
        body: JSON.stringify(data)
      })
    },

    put: (endpoint, data) => {
      return fetch(`${url}/${endpoint}`, {
        method: 'PUT',
        headers: headers,
        mode: 'cors',
        body: JSON.stringify(data)
      })
    },

    update: (endpoint, data) => {
      return fetch(`${url}/${endpoint}`, {
        method: 'UPDATE',
        headers: headers,
        mode: 'cors',
        body: JSON.stringify(data)
      })
    },

    delete: (endpoint) => {
      return fetch(`${url}/${endpoint}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
    }
  }
}
