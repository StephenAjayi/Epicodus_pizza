describe("Pizza", function() {
  it("initializes a pizza with properties and returns quantity", function() {
    var testPizza = new Pizza(1, "large", ["pepperoni", "sausage"])
    expect(testPizza.quantity).to.equal(1)
  });
);    