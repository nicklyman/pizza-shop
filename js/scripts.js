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
    console.log(inputtedToppings);
    var newPizza = new PizzaOrder(inputtedSize, inputtedToppings);

    var toppingPrice = inputtedToppings.map(function(dollar) {
      return parseInt(dollar, 10);
    });

    this.toppings = toppingPrice;
    console.log(this.toppings);
    console.log(newPizza);


    $(".show-receipt").show();
    $("ul.receiptInfo").append("<li>" + "$" + newPizza.pizzaTotal() + ".00" + "</li>");
  });
});
