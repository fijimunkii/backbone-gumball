$(function() {

  var machineList = new app.MachineList();
  var editMachine = new app.EditMachine();

  app.router = new app.Router();

  app.router.on('route:home', function() {
    machineList.render();
  });

  app.router.on('route:editMachine', function(id) {
    editMachine.render({id: id});
  });

  app.router.on('route:refillMachine', function(id) {
    var machine = new app.Machine({id: id});
    machine.fetch({
      success: function(machine) {
        machine.refill(420);
      }
    });
  });

  app.router.on('route:buyCandy', function(id) {
    var machine = new app.Machine({id: id});
    machine.fetch({
      success: function(machine) {
        machine.buyCandy();
      }
    });
  });

  Backbone.history.start();

});
