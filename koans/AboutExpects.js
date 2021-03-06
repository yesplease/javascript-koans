describe("About Expects", function() {

  var yourmother = 12;

  //We shall contemplate truth by testing reality, via spec expectations.  
  it("should expect true", function() {
    expect(true).toBeTruthy(); //This should be true
  });

  //To understand reality, we must compare our expectations against reality.
  it("should expect equality", function () { 
    var expectedValue = "yourmother";
    var actualValue = "yourmother";
  
    expect(actualValue === expectedValue).toBeTruthy();
  });  

  //Some ways of asserting equality are better than others.
  it("should assert equality a better way", function () { 
    var expectedValue = "yourMomsHouse";
    var actualValue = "yourMomsHouse";
  
  // toEqual() compares using common sense equality.
    expect(actualValue).toEqual(expectedValue);
  });

  //Sometimes you need to be really exact about what you "type".
  it("should assert equality with ===", function () { 
    var expectedValue = FILL_ME_IN;
    var actualValue = FILL_ME_IN.toString();
  
  // toBe() will always use === to compare.
    expect(actualValue).toBe(expectedValue);
  });  

  //Sometimes we will ask you to fill in the values.
  it("should have filled in values", function () {
    expect(yourmother).toEqual(yourmother);
  });
});
