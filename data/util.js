(function() {
  var util;

  util = {
    is: function(v, type) {
      return toString.apply(v) === ("[object " + type + "]");
    }
  };

}).call(this);
