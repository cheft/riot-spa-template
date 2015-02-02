<list-view>
    <div id="list_area"></div>

    list = riot.mountTo @list_area, 'list',
        col: 4
        columns: [
            {column: 'username',label: '用户名'}
            {column: 'name',label: '姓名'}
            {column: 'card',label: '身份证号'}
            {column: 'sex',label: '性别'}
            {column: 'age'}
        ]

        operates: [
            {operate: 'show', label: '查看', icon: 'fui-eye'}
            {operate: 'edit', label: '编辑', icon: 'fui-gear'}
            {operate: 'remove', label: '删除', icon: 'fui-trash'}
        ]

        data: [
            {age: 16, card: "88xx88xx", name: "cheft", sex: "男", username: "赵子龙"}
            {age: 33, card: "77xx88xx", name: "song", sex: "男", username: "关云长"}
            {age: 16, card: "88xx88xx", name: "cheft", sex: "男", username: "诸葛孔明"}
            {age: 33, card: "77xx88xx", name: "song", sex: "男", username: "张翼德"}
        ]


        store: 'data/data.json'

    list.on 'show edit remove', (e, id) ->
        # :TODO
        console.log e, id
        list.update()

</list-view>
