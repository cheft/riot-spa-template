<user-list>
    <div id="ctable_area"></div>

    ctable = riot.mountTo @ctable_area, 'ctable',
        columns: [
            {column: 'username',label: '用户名'}
            {column: 'name',label: '姓名'}
            {column: 'card',label: '身份证号'}
            {column: 'sex',label: '性别'}
            {column: 'age'}
        ]

        operates: [
            {operate: 'show', label: '查看', icon: 'glyphicon glyphicon-eye-open'}
            {operate: 'edit', label: '编辑', icon: 'glyphicon glyphicon-edit'}
            {operate: 'remove', label: '删除', icon: 'glyphicon glyphicon-trash'}
        ]

        # data: [
        #     {age: 16, card: "88xx88xx", name: "cheft", sex: "男", username: "赵子龙"}
        #     {age: 33, card: "77xx88xx", name: "song", sex: "男", username: "关云长"}
        #     {age: 16, card: "88xx88xx", name: "cheft", sex: "男", username: "诸葛孔明"}
        #     {age: 33, card: "77xx88xx", name: "song", sex: "男", username: "张翼德"}
        # ]

        store: 'data/data.json'

    ctable.on 'show edit remove', (e, id) ->
        # :TODO
        console.log e, id
        ctable.update()

</user-list>
