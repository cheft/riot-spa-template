<user-mgr>
    <div id="data_area"></div>
    <div id="grid_area"></div>

    grid = riot.mountTo @grid_area, 'grid',
        schema: [
            {column: 'username',label: '用户名'}
            {column: 'name',label: '姓名'}
            {column: 'card',label: '身份证号'}
            {column: 'sex',label: '性别'}
            {column: 'age'}
        ]

    data = riot.mountTo @data_area, 'data',  url: 'data/data.json'

    riot.observable data
    data.on 'list', =>
        grid.data = data.result
        grid.update()

</user-mgr>
