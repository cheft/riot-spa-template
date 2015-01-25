class Data

	constructor: (opts) ->
		if @is opts, 'Array'
			@ids = {}
			for opt, i in opts
				opt.id = i unless opt.id
				@ids[opt.id] = i
			@data = opts
		else
			@data = opts || {}

	is: (v, type) -> toString.apply(v) is "[object #{type}]"

	get: (key) ->
		return new Data(@data[@ids[key]]) if @is @data, 'Array'
		@data[key]

	set: (opts) ->
		if @is @data, 'Array'
			if opts.id and @data[@ids[opts.id]]
				@data[@ids[opts.id]] = opts
			else
				opts.id || opts.id = @data.length
				@ids[opts.id] = @data.length
				@data.push opts
		else
			@data[p] = opts[p] for p of opts
		@

	unset: (key) ->
		if @is @data, 'Array'
			res = []
			ids = {}
			for d, i in @data
				continue if d.id + '' is key + ''
				res.push d
				ids[d.id] = i
			@data = res
			@ids = ids
		else
			delete @data[key]
		@

	clear: ->
		@ids = {}
		if @is @data 'Array' then @data = [] else @data = {}
		@

	fetch: (opts) ->

	save: (opts) ->

	destroy: (opts) ->

	sync: ->
