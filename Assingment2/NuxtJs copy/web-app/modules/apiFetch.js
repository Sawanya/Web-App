const conf = require('../conf/main')
import queryString from 'query-string'
import axios from 'axios'

const createParams = (options) => queryString.stringify(options)

export const apiFetch = (url, options = {}) => {
    return axios
        .get(`${conf.apiUrlPrefix}/api/${url}?${createParams(options)}`)
        .then(r => r.data)
}