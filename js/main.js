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
  console.log(this.pCost);
  cost = this.pCost;
}


$(document).ready(function() {
  $("#submit").click(function() {

    var size = "";
    var numOfToppings = 0;
    if ($("#mushrooms").is(':checked'))
    {numOfToppings++;
    }if ($("#pepperoni").is(':checked'))
    {numOfToppings++;}
    if ($("#chicken").is(':checked'))
    {numOfToppings++;
    }if ($("#olives").is(':checked'))
    {numOfToppings++;}

    if ($("#small").is(':checked'))
    {size="small";
    }if ($("#medium").is(':checked'))
    {size="medium";;}
    if ($("#large").is(':checked'))
    {size="large";;}

    customersOrder = new Pizza();
    customersOrder.costOfPizza(size, numOfToppings)

    $("#pizzacost").text(customersOrder.pCost + " Montucky Bucks!");




  });

});
