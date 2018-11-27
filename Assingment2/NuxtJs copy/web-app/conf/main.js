const runProd = process.env.NODE_ENV == 'production' ? true : false

let conf = {
    apiUrlPrefix: runProd ? '' : 'http://localhost:3003',
}

module.exports = conf
