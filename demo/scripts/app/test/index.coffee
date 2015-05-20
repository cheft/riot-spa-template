module.exports =

	title1: 'ttt4455'

	title2: 'ppps'

	title3: 'tttt3'

	init: -> @on 'mount', -> console.log 'mount'

	test1: (e) -> console.log('test1')

	test2: -> console.log('test2')

	fill: (e) -> @title1 = e.target.value
