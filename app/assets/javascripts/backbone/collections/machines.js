var app = app || {};

app.Machines = Backbone.Collection.extend({
  model: app.Machine,
  url: '/machines'
});
