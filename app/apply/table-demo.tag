<table-demo>
    <div id="table_tag_area"></div>

    table_tag = riot.mountTo @table_tag_area, 'TableTag',
        fields: [
            {name: 'username',label: '用户名'}
            {name: 'name',label: '姓名'}
            {name: 'card',label: '身份证号'}
            {name: 'sex',label: '性别'}
            {name: 'age'}
        ]

        buttons: [
            {name: 'show', label: '查看', icon: 'glyphicon glyphicon-eye-open'}
            {name: 'edit', label: '编辑', icon: 'glyphicon glyphicon-edit'}
            {name: 'remove', label: '删除', icon: 'glyphicon glyphicon-trash'}
        ]

        # data: [
        #     {age: 16, card: "88xx88xx", name: "cheft", sex: "男", username: "赵子龙"}
        #     {age: 33, card: "77xx88xx", name: "song", sex: "男", username: "关云长"}
        #     {age: 16, card: "88xx88xx", name: "cheft", sex: "男", username: "诸葛孔明"}
        #     {age: 33, card: "77xx88xx", name: "song", sex: "男", username: "张翼德"}
        # ]

        store: 'src/utils/data.json'

    table_tag.on 'show edit remove', (e, id) ->
        # :TODO
        console.log e, id
        table_tag.update()

</table-demo>
