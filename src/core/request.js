(function() {
  C.Request = {
    url: function(model) {
      var base, options, urls;
      options = model.app.options;
      urls = [options.urlRoot];
      if (model.module.options.urlPrefix) {
        urls.push(model.module.options.urlPrefix);
      }
      urls.push(model.module.name);
      base = model.url || '';
      if (D.isFunction(base)) {
        base = base.apply(model);
      }
      while (base.indexOf('../') === 0) {
        urls.pop();
        base = base.slice(3);
      }
      if (base) {
        urls.push(base);
      }
      if (model.data.id) {
        urls.push(model.data.id);
      }
      if (options.urlSuffix) {
        urls.push(urls.pop() + options.urlSuffix);
      }
      return compose.apply(null, urls);
    },
    get: function(model, options) {
      return this.ajax({
        type: 'GET'
      }, model, model.getParams(), options);
    },
    post: function(model, options) {
      return this.ajax({
        type: 'POST'
      }, model, model.data, options);
    },
    put: function(model, options) {
      return this.ajax({
        type: 'PUT'
      }, model, model.data, options);
    },
    del: function(model, options) {
      return this.ajax({
        type: 'DELETE'
      }, model, model.data, options);
    },
    save: function(model, options) {
      if (model.data.id) {
        return this.put(model, options);
      } else {
        return this.post(model, options);
      }
    },
    ajax: function(params, model, data, options) {
      var url;
      if (options == null) {
        options = {};
      }
      url = this.url(model);
      params = D.extend(params, options);
      data = D.extend(data, options.data);
      params.url = url;
      params.data = data;
      return model.Promise.chain(A.ajax(params), function(resp) {
        model.set(resp);
        model.changed();
        return model;
      });
    }
  };

}).call(this);
