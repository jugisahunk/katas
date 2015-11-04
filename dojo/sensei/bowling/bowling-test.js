"use strict"

var bowling = require("./BowlingGame.js");

describe("Bowling Kata", function(){
  describe("Score", function(){
    it("should have a way to score a game of bowling",function(){
      var bowlingGame = new bowling();

      expect(bowlingGame).not.toBeUndefined();
    });
  });
});
