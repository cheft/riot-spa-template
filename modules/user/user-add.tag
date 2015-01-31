<user-add>
    <div id="cform_area"></div>

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
            {name: 'card', label: '身份证', type: 'file'}
            {name: 'phone', label: '手机'}
            {name: 'qq', label: 'QQ'}
            {name: 'name', label: '姓名'}
            {name: 'backBank', label: '银行卡号', span: 3}
            {name: 'url', label: '个人主页', span: 4}
            {name: 'address', label: '地址', type: 'textarea', span: 2, rows: 6}
            {name: 'native', label: '籍贯',  type: 'textarea',  span: 2, rows: 6}
        ]

</user-add>
