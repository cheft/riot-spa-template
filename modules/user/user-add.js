riot.tag('user-add', '<div id="cform_area"></div> <div id="buttons_area"></div>', function(opts) {var buttons, cform;

cform = riot.mountTo(this.cform_area, 'cform', {
  col: 4,
  fields: [
    {
      name: 'username',
      label: '用户名',
      placeholder: '请输入用户名'
    }, {
      name: 'password',
      label: '密码',
      type: 'password'
    }, {
      name: 'email',
      label: '邮箱'
    }, {
      name: 'sex',
      label: '性别'
    }, {
      name: 'age',
      label: '年龄'
    }, {
      name: 'card',
      label: '身份证'
    }, {
      name: 'phone',
      label: '手机'
    }, {
      name: 'qq',
      label: 'QQ'
    }, {
      name: 'name',
      label: '姓名'
    }, {
      name: 'bankCard',
      label: '银行卡号',
      span: 3
    }, {
      name: 'url',
      label: '个人主页',
      span: 4
    }, {
      name: 'address',
      label: '地址',
      type: 'textarea',
      span: 2,
      rows: 6
    }, {
      name: 'native',
      label: '籍贯',
      type: 'textarea',
      span: 2,
      rows: 6
    }
  ]
});

buttons = riot.mountTo(this.buttons_area, 'buttons', {
  position: 'center',
  buttons: [
    {
      operate: 'reset',
      label: '重置',
      icon: 'fui-time',
      style: 'btn-danger'
    }, {
      operate: 'set',
      label: '设值',
      icon: 'fui-check',
      style: 'btn-success'
    }, {
      operate: 'get',
      label: '取值',
      icon: 'fui-eye',
      style: 'btn-info'
    }
  ]
});

buttons.on('reset', function() {
  return cform.reset();
});

buttons.on('set', function() {
  return cform.setData({
    username: 'cheft',
    password: '111111',
    email: 'cn.cheft@gmail.com',
    age: 16,
    sex: '男',
    url: "http://cheft.cn",
    qq: '7720829',
    name: 'cheft',
    phone: '18616818688',
    address: 'China ShenZhen',
    "native": '火星',
    bankCard: '8888888',
    card: '99999999'
  });
});

buttons.on('get', function() {
  return alert(JSON.stringify(cform.getData()));
});

});
