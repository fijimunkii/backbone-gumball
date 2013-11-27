var app = app || {};

app.EditMachine = Backbone.View.extend({
  el: '.page',
  render: function(options) {
    var that = this;
    if (options.id) {
      that.machine = new app.Machine({id: options.id});
      that.machine.fetch({
        success: function(machine) {
          var template = _.template($('#edit-machine-template').html(), {machine: machine});
          that.$el.html(template);
        }
      })
    } else {
      var template = _.template($('#edit-machine-template').html(), {machine: undefined});
      this.$el.html(template);
    }
  },
  events: {
    'submit .edit-machine-form': 'saveMachine',
    'click .delete': 'deleteMachine'
  },
  saveMachine: function(e) {
    e.preventDefault();
    var machineDetails = $(e.currentTarget).serializeObject();
    var machine = new app.Machine();
    machine.save(machineDetails, {
      success: function(machine) {
        app.router.navigate('', {trigger: true});
      }
    });
    return false;
  },
  deleteMachine: function(e) {
    e.preventDefault();
    this.machine.destroy({
      success: function() {
        app.router.navigate('', {trigger: true})
      }
    })
  }
});
