//business logic
function PizzaOrder(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

PizzaOrder.prototype.pizzaTotal = function() {
  return this.size + this.toppings;
}


//user interface logic
$(document).ready(function() {
  $(".submit").click(function(event) {
    event.preventDefault();

    var inputtedSize = parseInt($("input:radio[name=size]:checked").val());
    var inputtedToppings = [];

    $("input:checkbox:checked").each(function() {
      inputtedToppings.push($(this).val());
    });

    var toppingPrice = inputtedToppings.map(function(dollar) {
      return parseInt(dollar, 10);
    });

    var totalToppings = 0;
    for (i = 0; i < toppingPrice.length; i++) {
      totalToppings += toppingPrice[i];
    }

    this.toppings = totalToppings;
    console.log(this.toppings);

    var newPizza = new PizzaOrder(inputtedSize, totalToppings);


    //Show receipt on submit//
    $(".show-receipt").show();
    $("h3.receiptInfo").append(" " + "$" + newPizza.pizzaTotal() + ".00");
  });
});
