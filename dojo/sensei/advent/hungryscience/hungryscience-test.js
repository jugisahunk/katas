"use strict"

var HungryScience = require("./HungryScience.js");

describe("Hungry Science Kata", function(){
  var hungryScience;
  
  beforeEach(function(){
    hungryScience = new HungryScience();
  });
  
  describe("recipe", function(){
    it("should contain exactly 100 teaspoons of ingredient", function(){
      var recipe = hungryScience.getRecipe();
      
      expect(recipe.ingredients.length).toEqual(100);
    });
  });
});
