const BASE_API = 'http://localhost:3000'

export function get(endpoint) {
  const token = localStorage.getItem('X-Auth-Token')
  console.log('token: ', token)
  return fetch(BASE_API + endpoint, {
    method: 'GET',
    headers: {
      'X-Auth-Token': token
    }
  })
    .then(resp => {
      return resp.json()
    })
    .then(res => {
      if (res.error_code === 0) {
        return res
      }
    })
    .catch(e => {
      console.log(e)
    })
}

export function post(endpoint, payload) {
  const token = localStorage.getItem('X-Auth-Token')

  return fetch(BASE_API + endpoint, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers:{
      'Content-Type': 'application/json',
      'X-Auth-Token': token
    }
  })
    .then(res => res.json())
    .then(res => {
      if (res.error_code === 0) {
        return res
      }
    })
    .catch(e => {
      console.log(e)
    })
}
