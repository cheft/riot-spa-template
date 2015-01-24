class Data

	constructor: (opts) ->
		if @is opts, 'Array'
			res = {}
			id = 0
			for opt in opts
				opt.id = id++ unless opt.id
				res[opt.id] = opt
			@data = res
		else
			@data = {}
			id = if opts and opts.id then opts.id else '1'
			@data[id] = opts

	is: (v, type) -> toString.apply(v) is "[object #{type}]"

	get: (key) ->
		return new Data(@data[key]) if @size() > 1
		@json()[key]

	size: ->
		c = 0
		for i of @data
			c++
		c

	json: ->
		res = []
		for i of @data
			if @size() is 1
				return @data[i]
			res.push @data[i]
		res

model = new Data [
	{id: '1', age: 12}
	{id: 'w', age: 10}
]

