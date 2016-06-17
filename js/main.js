var orderHistory = [];

function Pizza() {
  debugger;
  this.sizes = ['small', 'medium', 'large'];
  this.sizesCost = [12, 16, 20];
  this.toppings = ['pepperoni', 'chicken', 'mushroom', 'olives']
  this.toppingsCost = 1;
  this.pCost = 0;
}

Pizza.prototype.costOfPizza = function(size, howManyToppings) {
  if (this.sizes.indexOf(size) >= 0) {
    this.pCost += this.sizesCost[this.sizes.indexOf(size)]
  }
  if (howManyToppings > 0) {
    this.pCost += this.toppingsCost * howManyToppings;
  }
  console.log(this.pCost);
  cost = this.pCost;
  var order = {
    ordertops: howManyToppings,
    ordersize: size
  }
  orderHistory.push(order);
}

function checkHistory(item) {
  return orderHistory[item];
}
