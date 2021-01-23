describe('calculateMonthlyPayment Tests', function () {
  
  // specify expected value and create an object with the arguments that should lead to it.
  let monthly = '93.22';
  let values = { amount: 5000, years: 5, rate: .045 };
  
  // calculate the montly rate
  let result = calculateMonthlyPayment(values);
  
  it('should calculate the monthly rate correctly', function () {
    // assert the result is the same as the expected value
    expect(monthly).toEqual(result);

  });

  it("should return a result with 2 decimal places", function () {
    let i = result.indexOf('.'); 
    expect(result.slice(i + 1).length).toEqual(2); 
  });

});


