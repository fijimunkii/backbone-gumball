var app = app || {};

app.MachineList = Backbone.View.extend({
  el: '.page',
  render: function() {
    var that = this;
    var machines = new app.Machines();
    machines.fetch({
      success: function(machines) {
        var template = _.template($('#machine-list-template').html(), {machines: machines.models});
        that.$el.html(template);
      }
    });
  }
});
