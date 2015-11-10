"use strict"

var BowlingGame = require("./BowlingGame.js");

describe("Bowling Kata", function(){
  var bowlingGame;
  
  beforeEach(function(){
    bowlingGame = new BowlingGame();
  });
  
  describe("Roll", function(){
    it("should provide a way to roll a ball", function(){
      expect(bowlingGame.roll).not.toBeUndefined();
    });
  });
  
  describe("Score", function(){
    it("should have a way to score a game of bowling",function(){
      expect(bowlingGame.score).not.toBeUndefined();
    });
  });
});
