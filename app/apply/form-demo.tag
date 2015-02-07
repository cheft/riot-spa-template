<form-demo>
    <div id="form_tag_area"></div>
    <div id="button_tag_area"></div>

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

    button_tag = riot.mountTo @button_tag_area, 'ButtonTag',
        position: 'center'  # center right left|none
        buttons: [
            {name: 'reset', label: '重置', icon: 'fui-time', style: 'btn-danger'}
            {name: 'set', label: '设值', icon: 'fui-check', style: 'btn-success'}
            {name: 'get', label: '取值', icon: 'fui-eye', style: 'btn-info'}
        ]

    button_tag.on 'reset', -> form_tag.reset()

    button_tag.on 'set', ->
        form_tag.setData
            username: 'cheft'
            password: '111111'
            email: 'cn.cheft@gmail.com'
            age: 16
            sex: '男'
            url: "http://cheft.cn"
            qq: '7720829'
            name: 'cheft'
            phone: '18616818688'
            address: 'China ShenZhen'
            native: '火星'
            bankCard: '8888888'
            card: '99999999'

    button_tag.on 'get', ->
        alert JSON.stringify(form_tag.getData())
</form-demo>
