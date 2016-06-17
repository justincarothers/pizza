function Pizza() {
  this.sizes = ['small', 'medium', 'large'];
  this.sizesCost = [12, 16, 20];
  this.toppings = ['pepperoni', 'chicken', 'mushroom', 'olives']
  this.toppingsCost = 1;
  this.pCost = 0;
}
Pizza.prototype.costOfPizza = function(size, howManyToppings) {
  debugger;
  if (this.sizes.indexOf(size) >= 0) {
    this.pCost += this.sizesCost[this.sizes.indexOf(size)]
  }
  if (howManyToppings > 0) {
    this.pCost += this.toppingsCost * howManyToppings;
  }
  return this.pCost;
}
newPizza = new Pizza();

$(document).ready(function() {

  var size = "";
  var numOfToppings = 0;

  $("#submit").click(function() {

    if ($("#mushrooms").is(':checked'))
    alert("YES!!");

  });

});
