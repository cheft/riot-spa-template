# Cheftjs
是基于 riot.js 封装的一套 UI 框架

## feature
* 表单
* 列表
* 表格（废弃，因为不支持 IE8/9 [官方解释](https://muut.com/riotjs/download.html#known-issues)）
* 按钮组
* ...

## 运行
任意容器

## [demo](http://riot.cheft.cn)

## code

### form

    form_tag = riot.mountTo @form_tag_area, 'FormTag',
        col: 4
        # hiddenLabel: true
        # hiddenPh: true
        fields: [
            {name: 'username', label: '用户名', placeholder: '请输入用户名'}
            {name: 'password', label: '密码', type: 'password'}
            {name: 'email', label: '邮箱'}
            {name: 'sex', label: '性别'}
            {name: 'age', label: '年龄'}
            {name: 'card', label: '身份证'}
            {name: 'phone', label: '手机'}
            {name: 'qq', label: 'QQ'}
            {name: 'name', label: '姓名'}
            {name: 'bankCard', label: '银行卡号', span: 3}
            {name: 'url', label: '个人主页', span: 4}
            {name: 'address', label: '地址', type: 'textarea', span: 2, rows: 6}
            {name: 'native', label: '籍贯',  type: 'textarea',  span: 2, rows: 6}
        ]


### list

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

        store: 'src/utils/data.json'


### table

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

        store: 'src/utils/data.json'

### button

    button_tag = riot.mountTo @button_tag_area, 'ButtonTag',
        position: 'center'  # center right left|none
        buttons: [
            {name: 'reset', label: '重置', icon: 'fui-time', style: 'btn-danger'}
            {name: 'set', label: '设值', icon: 'fui-check', style: 'btn-success'}
            {name: 'get', label: '取值', icon: 'fui-eye', style: 'btn-info'}
        ]
