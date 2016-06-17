$(document).ready(function() {
  $(".cheesus").hide();
  $("#banner h1").hide();
  for (var i = 0; i < 100; i++) {
    $("#banner h1").fadeIn(5000);
    $("#banner h1").fadeOut(2500);
  }

  $("#submit").click(function() {
    var customersOrder = [];
    var size = "";
    var numOfToppings = 0;
    if ($("#mushrooms").is(':checked'))
    {numOfToppings++; $("#pizzaStack").append('<img src="img/mushroom.png" alt="mushrooms"/>')
    }if ($("#pepperoni").is(':checked'))
    {numOfToppings++; $("#pizzaStack").append('<img src="img/pepperoni.png" alt="pepperoni"/>')}
    if ($("#chicken").is(':checked'))
    {numOfToppings++; $("#pizzaStack").append('<img src="img/chicken.png" alt="chicken"/>')
    }if ($("#olives").is(':checked'))
    {numOfToppings++; $("#pizzaStack").append('<img src="img/olives.png" alt="chicken"/>')}

    if ($("#small").is(':checked'))
    {size="small";
    }if ($("#medium").is(':checked'))
    {size="medium";;}
    if ($("#large").is(':checked'))
    {size="large";;}

    customersOrder = new Pizza();
    customersOrder.costOfPizza(size, numOfToppings);


    $("#pizzacost").text(customersOrder.pCost + " Montucky Bucks!");
    $("#che").text("You owe us " + customersOrder.pCost + " Montucky Bucks!");
    $("#wrapper").hide();
    $(".cheesus").fadeIn(500);

  });

  $("#continue").click(function() {

    $(".cheesus").hide();
    $("#wrapper").fadeIn(200);

  });

  $("#refund").click(function() {

    alert("You haven't given us money yet, fool!");
    $(".cheesus").hide();
    $("#wrapper").fadeIn(200);

  });

});
