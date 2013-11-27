var app = app || {};

app.Machine = Backbone.Model.extend({
  urlRoot: '/machines',

  defaults: {
    numCandy: 0,
    money: 0,
    cost: 0.25,
    location: 'the factory'
  },

  initialize: function() {

    this.on("change:money", function(model) {
      console.log("i now have " + model.get('money') + " monies");
    });

    this.on("change:numCandy", function(model) {
      console.log("i now have " + model.get('numCandy') + " gumballs");
    });

  },

  refill: function(numCandies) {
    console.log("adding " + numCandies + " candies");
    this.save({ numCandy: numCandies });
    console.log("i now have " + this.get('numCandy') + " candies");
    app.router.navigate('', {trigger: true});
  },

  buyCandy: function() {
    console.log("selling a gumball");
    this.set({ money: this.get('money') + this.get('cost') });
    this.set({ numCandy: this.get('numCandy') - 1 });
    this.save();
    app.router.navigate('', {trigger: true});
  }

});
