riot.tag('grid', '<table class="table table-striped"> <tr> <th width="5%"> # </th> <th each="{schema}"> {label || column} </th> </tr> <tr each="{d, i in data}"> <td> {i + 1} </td> <td each="{parent.schema}"> {parent.d[column]} </td> </tr> </table>', function(opts) {var dataTag, schemaTag;

schemaTag = riot.mount(this.opts.schema)[0];

riot.observable(schemaTag);

dataTag = riot.mount(this.opts.data)[0];

riot.observable(dataTag);

schemaTag.on('ajax', (function(_this) {
  return function() {
    _this.schema = schemaTag.value;
    return dataTag.trigger('start');
  };
})(this));

dataTag.on('start ajax', (function(_this) {
  return function() {
    _this.data = dataTag.value;
    return _this.update();
  };
})(this));

});
