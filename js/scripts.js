//business logic
function PizzaOptions(size, toppings) {
  this.size = size;
}

function Topping(free, meat, vegetable, extra) {
  this.free = free;
  this.meat = meat;
  this.vegetable = vegetable;
  this.extra = extra;
}

PizzaOptions.prototype.pizzaTotal = function() {
  return this.size + this.toppings;
}

Topping.prototype.allToppings = function() {
  return this.free + this.meat + this.vegetable + this.extra;
}


//user interface logic
$(document).ready(function() {
  $(".build-pizza").submit(function(event) {
    event.preventDefault();

    var inputtedSize = parseInt($("input:radio[name=size]:checked").val());
    console.log(inputtedSize);
    var inputtedToppings = [];
    $("input:checkbox:checked").each(function() {
      inputtedToppings.push($(this).val());
      console.log(inputtedToppings);
    });
    var newPizza = new PizzaOptions(inputtedSize, inputtedToppings);



    $(".show-receipt").show();

    $("ul.receiptInfo").append("<li>" + "$" + newPizza.pizzaTotal() + ".00" + "</li>");
  });
});
