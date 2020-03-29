import('./libs/jquery.js').then(function(data0) {
  import('./libs/jquery.nice-select.min.js').then(function(data1) {
    $(document).ready(function() {
      $('select.text-field__select').niceSelect();
    });
  });
});
