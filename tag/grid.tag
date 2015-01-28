<grid>
    <table class="table table-striped">
        <tr>
            <th width="5%"> # </th>
            <th each={schema}>
                {label || column}
            </th>
        </tr>
        <tr each={d, i in data}>
            <td> {i + 1} </td>
            <td each={parent.schema}>
                {parent.d[column]}
            </td>
        </tr>
    </table>

    schemaTag = riot.mount(@opts.schema)[0]
    riot.observable(schemaTag)

    dataTag = riot.mount(@opts.data)[0]
    riot.observable(dataTag)

    schemaTag.on 'ajax', =>
        @schema = schemaTag.value
        dataTag.trigger 'start'

    dataTag.on 'start ajax', =>
        @data = dataTag.value
        @update()
</grid>
