<grid>
    <table class="table table-striped">
        <tr>
            <th width="5%"> # </th>
            <th each={opts.schema}>
                {label || column}
            </th>
        </tr>
        <tr each={d, i in data}>
            <td> {i + 1} </td>
            <td each={parent.opts.schema}>
                {parent.d[column]}
            </td>
        </tr>
    </table>
</grid>
