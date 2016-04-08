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
  $(".pizza-price-toppings").submit(function(event) {
    event.preventDefault();
    $("ul").empty();

    var inputtedSize = parseInt($("input:checkbox[name=size]:checked").val());
    alert(inputtedSize);
    //Need to loop through the toppings and get the prices per pizza order//
    var toppings = //not defined//
    var checkedToppings = document.getElementByClassName(toppings).checked = true;
    console.log(checkedToppings);
    var inputtedToppings = parseInt($("input:radio[name=age]:checked").val());

    var newPizza = new PizzaOrder(inputtedSize, inputtedToppings);


    $(".show-receipt").show();

    $("ul.receiptInfo").append("<li>" + "$" + newPizza.pizzaTotal() + ".00" + "</li>");



  });
});
