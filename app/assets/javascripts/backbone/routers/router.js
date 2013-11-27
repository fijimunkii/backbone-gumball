var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'new': 'editMachine',
    'edit/:id': 'editMachine',
    'refill/:id': 'refillMachine',
    'buy-candy/:id': 'buyCandy'
  }
});
