$(function() {

  // load some stuff
  var machine1 = new Machine();
  var machine2 = new Machine();
  var machine3 = new Machine();
  var machine4 = new Machine();
  var machine5 = new Machine();

  var machines = new Machines([
    machine1,
    machine2,
    machine3,
    machine4,
    machine5
  ]);

  var machineList = new MachineList();
  var editMachine = new EditMachine();


  var Router = Backbone.Router.extend({
    routes: {
      '': 'home',
      'new': 'editMachine'
    },

    initialize: function() {
      this.on('route:home', function() {
        machineList.render();
      });
      this.on('route#editMachine', function() {
        editMachine.render();
      });
    }
  });

  var router = new Router();

  Backbone.history.start();

});
