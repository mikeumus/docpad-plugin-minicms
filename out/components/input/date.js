// Generated by IcedCoffeeScript 1.3.3g
(function() {

  module.exports = function() {
    if (this.shouldLoadScript) {
      coffeescript(function() {
        return window.minicms_component_date = function(prefix, form, name) {
          var field;
          field = $('#field-' + form + '-' + name);
          console.log(name + " = " + $('#' + form + '-form').data('fields')[name]);
          field.data('value', $('#' + form + '-form').data('fields')[name]);
          return $(document).ready(function() {
            var format, picker, val;
            format = $('#form-input-' + form + '-' + name + ' input').data('format');
            $('#form-input-' + form + '-' + name).datetimepicker({
              pickTime: (format === 'yyyy-MM-dd' ? false : true)
            });
            picker = $('#form-input-' + form + '-' + name).data('datetimepicker');
            val = $('#' + form + '-form').data('fields')[name];
            if (!val) val = new Date().getTime();
            picker.setLocalDate(new Date(val));
            minicms_form_load(prefix, form, name);
            return setInterval((function() {
              var current, date;
              current = $('#' + form + '-form').data('fields')[name];
              date = picker.getLocalDate().getTime();
              if (current !== date) {
                console.log(name + " = " + date);
                field.data('value', date);
                return minicms_form_update(prefix, form);
              }
            }), 250);
          });
        };
      });
    }
    div('#field-' + this.form + '-' + this.field + '.control-group.form-component-date', function() {
      return div('.form-field-content', function() {
        label('.control-label', {
          "for": "form-input-" + this.form + "-" + this.field
        }, function() {
          return h(this.label);
        });
        return div('.controls', function() {
          return div('#form-input-' + this.form + '-' + this.field + '.input-append.date', function() {
            input('.no-halo', {
              type: 'text',
              'data-format': ((this.time != null) && !this.time ? 'yyyy-MM-dd' : 'yyyy-MM-dd hh:mm:ss')
            }, function() {});
            return span('.add-on', function() {
              return i({
                'data-time-icon': 'icon-time',
                'data-date-icon': 'icon-calendar'
              }, function() {});
            });
          });
        });
      });
    });
    return text('<script type="text/javascript">minicms_component_date("' + this.config.prefix.url + '", "' + this.form + '", "' + this.field + '");</script>');
  };

}).call(this);