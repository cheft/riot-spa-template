<list-demo>
    <div id="list_tag_area"></div>

    list_tag = riot.mountTo @list_tag_area, 'ListTag',
        col: 4
        fields: [
            {name: 'username',label: '用户名'}
            {name: 'name',label: '姓名'}
            {name: 'age'}
            {name: 'card',label: '身份证号', span: 2}
            {name: 'sex',label: '性别'}
        ]

        buttons: [
            {name: 'show', label: '查看', icon: 'fui-eye'}
            {name: 'edit', label: '编辑', icon: 'fui-gear'}
            {name: 'remove', label: '删除', icon: 'fui-trash'}
        ]

        # data: [
        #     {age: 16, card: "88xx88xx", name: "cheft", sex: "男", username: "赵子龙"}
        #     {age: 33, card: "77xx88xx", name: "song", sex: "男", username: "关云长"}
        #     {age: 16, card: "88xx88xx", name: "cheft", sex: "男", username: "诸葛孔明"}
        #     {age: 33, card: "77xx88xx", name: "song", sex: "男", username: "张翼德"}
        # ]

        store: 'src/utils/data.json'

    list_tag.on 'show edit remove', (e, id) ->
        # :TODO
        console.log e, id
        list_tag.update()

</list-demo>
