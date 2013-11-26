var Machine = Backbone.Model.extend({
  defaults: {
    numCandy: 0,
    money: 0,
    cost: 0.25,
    location: 'the factory'
  },

  initialize: function() {
    alert("a beautiful new machine");

    this.on("change:money", function(model) {
      console.log("i now have " + model.get('money') + " monies");
    });

    this.on("change:numCandy", function(model) {
      console.log("i now have " + model.get('numCandy') + " gumballs");
    });

  },

  addCandy: function(numCandies) {
    this.set({ numCandy: this.get('numCandy') + numCandies });
    console.log("adding " + numCandies + " candies");
    console.log("i now have " + this.get('numCandy') + " candies");
  },

  buyCandy: function() {
    console.log("selling a gumball");
    this.set({ money: this.get('money') + this.get('cost') });
    this.set({ numCandy: this.get('numCandy') - 1 });
  }

});

var Machines = Backbone.Collection.extend({
  model: Machine,
  url: '/machines'
});

var MachineList = Backbone.View.extend({
  el: '.page',
  render: function() {
    var that = this;
    var machines = new Machines();
    machines.fetch({
      success: function(machines) {
        var template = _.template($('#machine-list-template').html(), {machines: machines.models});
        that.$el.html(template);
      }
    });
  }
});

var EditMachine = Backbone.View.extend({
  el: '.page',
  render: function() {
    var template = _.template($('#edit-machine-template').html(), {});
    this.$el.html(template);
  },
  events: {
    'submit .edit-machine-form': 'saveMachine',
  },
  saveMachine = function(e) {
    var machineDetails = $(e.currentTarget).serializeObject();
    return false;
  }
})
