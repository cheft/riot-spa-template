module.exports =

    stores:
        ranking: {}

    actions:
        remove: (e) ->
            @ranking.del(id: e.item.id).done =>
                @trigger('refresh')
            e.preventUpdate = true
            e.stopPropagation()

        add: (e) ->
            obj = {phone: '13316463321', number: 1, date: '2016-02-02'}
            @ranking.save(obj).done =>
                @trigger('refresh')
            e.preventUpdate = true

        edit: (e) ->
            obj = {id: e.item.id, phone: '133xxxx0000', number: 50, date: '2016-xx-xx'}
            @ranking.save(obj).done =>
                @trigger('refresh')
            e.preventUpdate = true

    events:
        mount: -> @trigger('refresh')

        update: -> console.log 'update'

        refresh: -> @ranking.get().done => @update()
