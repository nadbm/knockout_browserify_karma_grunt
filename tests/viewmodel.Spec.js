var ViewModel = require('../modules/ViewModel');

describe("basic test", function(){
  it("initialize properly", function(){

    var vm = new ViewModel("Planet", "Earth");

    expect(vm.firstName()).toEqual("Planet");
    expect(vm.lastName()).toEqual("Earth");
    expect(vm.fullName()).toEqual("Planet Earth");
  });
});