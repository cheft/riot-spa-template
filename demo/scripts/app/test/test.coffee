module.exports =
	actions:
		init: ->
			@title1 = '1111111'
			@title2 = '2222222'
			@title3 = '3333333'

			@trigger('init')

		test1: (e) ->
			console.log('test1')

		test2: -> console.log('test2')

		fill: (e) -> @title1 = e.target.value

	events:
		mount: -> console.log 'mount'

		update: -> console.log 'update'

		updated: -> console.log 'updated'

		unmount: -> console.log 'unmount'

		remove: -> console.log 'remove'
