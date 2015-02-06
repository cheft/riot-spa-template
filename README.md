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

    cform = riot.mountTo @cform_area, 'cform',
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

    list = riot.mountTo @list_area, 'list',
        col: 4
        columns: [
            {column: 'username',label: '用户名'}
            {column: 'name',label: '姓名'}
            {column: 'age'}
            {column: 'card',label: '身份证号', span: 2}
            {column: 'sex',label: '性别'}
        ]

        operates: [
            {operate: 'show', label: '查看', icon: 'fui-eye'}
            {operate: 'edit', label: '编辑', icon: 'fui-gear'}
            {operate: 'remove', label: '删除', icon: 'fui-trash'}
        ]

        store: 'data/data.json'

### table

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

        store: 'data/data.json'

### button

    buttons = riot.mountTo @buttons_area, 'buttons',
        position: 'center'  # center right left|none
        buttons: [
            {operate: 'reset', label: '重置', icon: 'glyphicon glyphicon-eye-open', style: 'danger'}
            {operate: 'set', label: '设值', icon: 'glyphicon glyphicon-edit', style: 'success'}
            {operate: 'get', label: '取值', icon: 'glyphicon glyphicon-trash', style: 'info'}
        ]
