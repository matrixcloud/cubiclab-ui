const BASE_API = process.env.VUE_APP_BASE_API

export function get(endpoint) {
  const token = localStorage.getItem('X-Auth-Token')
  if (!token) {
    redirect2Login()
  }

  return fetch(BASE_API + endpoint, {
    method: 'GET',
    headers: {
      'X-Auth-Token': token
    }
  })
    .then(res => {
      if (res.status === 401) {
        redirect2Login()
        return null
      } else if (res.status === 404) {
        this.$Message.warning(`Endpoint [${endpoint}] Can't be found`)
      } else {
        return res.json()
      }
    })
    .then(res => {
      if (res && res.error_code === 0) {
        return res
      }
    })
    .catch(e => {
      console.log(e)
    })
}

export function post(endpoint, payload) {
  const token = localStorage.getItem('X-Auth-Token')
  if (!token) {
    redirect2Login()
  }

  return fetch(BASE_API + endpoint, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers:{
      'Content-Type': 'application/json',
      'X-Auth-Token': token
    }
  })
    .then(res => {
      if (res.status === 401) {
        redirect2Login()
        return null
      } else if (res.status === 404) {
        this.$Message.warning(`Endpoint [${endpoint}] Can't be found`)
      } else {
        return res.json()
      }
    })
    .then(res => {
      if (res && res.error_code === 0) {
        return res
      }
    })
    .catch(e => {
      console.log(e)
    })
}

export function del(endpoint) {
  const token = localStorage.getItem('X-Auth-Token')
  if (!token) {
    redirect2Login()
  }

  return fetch(BASE_API + endpoint, {
    method: 'DELETE',
    headers:{
      'Content-Type': 'application/json',
      'X-Auth-Token': token
    }
  })
    .then(res => {
      if (res.status === 401) {
        redirect2Login()
        return null
      } else if (res.status === 404) {
        this.$Message.warning(`Endpoint [${endpoint}] Can't be found`)
      } else {
        return res.json()
      }
    })
    .then(res => {
      if (res && res.error_code === 0) {
        return res
      }
    })
    .catch(e => {
      console.log(e)
    })
}

function redirect2Login() {
  window.location.href = '/#/login'
}
