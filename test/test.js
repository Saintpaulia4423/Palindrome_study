let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function () {
    describe("#palindrome", function () {
        it("パリンドロームでない場合はfalseを返す", function () {
            let nonPlaindrome = new Phrase("apple");
            assert(!nonPlaindrome.palindrome());
        });

        it("単純なパリンドロームの場合はtrueを返す", function () {
            let plainPalindrome = new Phrase("racecar");
            assert(plainPalindrome.palindrome());
        });

        it("パリンドロームが大文字小文字混じりでもtrueを返す", function () {
            let bigSmallPalindrome = new Phrase("RaceCar");
            assert(bigSmallPalindrome.palindrome());
        });

    });
    describe("#letters", function () {
        it("パリンドロームに句読点があってもtrueを返す", function () {
            let punctuatedPlaindrome = new Phrase("Madam, I'm Adam.");
            assert.strictEqual(punctuatedPlaindrome.letters(), "MadamImAdam");
        });

    });
});