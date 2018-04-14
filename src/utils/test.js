


const defaultOpts = {
	method: 'get'
}

const opts = {
	method: 'get',
	data:{
		name: 'yl'
	}
}

const a = Object.assign({}, defaultOpts, opts, opts.method.toUpperCase() === 'GET'? {params: opts.data, data:null}:{})
console.log(a);