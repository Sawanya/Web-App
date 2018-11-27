const jsonServer = require('json-server')
const db = require('./db')
const server = jsonServer.create()
const router = jsonServer.router(db)
const middlewares = jsonServer.defaults()
const port = 3003
const _ = require('lodash')
const traverse = require('traverse');

server.use(middlewares)
server.use(jsonServer.bodyParser)

let renameKeys = (obj, from, to) => {
	traverse(obj).forEach(function(item) {
	    if(this.key && (typeof item[from] !== 'undefined')){
  			item[to] = item[from];
  		}else if(this.key == from){
  			this.remove(true)
  		}
	});
}

router.render = (req, res) => {
  	res.jsonp(res.locals.data)
}

server.use('/api', router)

server.listen(port, () => {
  console.log(`JSON Server is running at port ${port}`)
})
