/// <reference path="modules/import.js">
var ViewModel = require('ViewModel');
describe("basic test", function(){
  it("initialize properly", function(){
    var vm = new ViewModel("Planet", "Earth");

    expect(vm.firstName()).toEqual("Planet");
    expect(vm.lastName()).toEqual("Earth");
//    vm.value1("1");
//    vm.value2("2");
//    expect(vm.result()).toEqual(3);
    
  });
});