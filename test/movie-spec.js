const { expect } = require("chai");

const Movie = require("../classes/movie.js");
const Horror = require("../classes/horror.js");
const Comedy = require("../classes/comedy.js");
const Action = require("../classes/action.js");



describe("Movie class", function() {

    it("should set title, duration, and rating on creation", function() {
        let movie = new Movie("The Matrix", 142, 9.3);

        expect(movie.title).to.equal("The Matrix");
        expect(movie.duration).to.equal(142);
        expect(movie.rating).to.equal(9.3);
    });

    it("should correctly determine if a movie is long (more than 150 minutes)", function() {
        let longMovie = new Movie("Titanic", 195, 7.8);
        let shortMovie = new Movie("The Lion King", 100, 8.1);

        expect(longMovie.isLong()).to.be.true;
        expect(shortMovie.isLong()).to.be.false;
    });

    it("should allow updating the rating", function() {
        let movie = new Movie("Inception", 148, 8.8);
        movie.updateRating(9.0);

        expect(movie.rating).to.equal(9.0);
    });
});


describe("Horror class", function() {
    it("inherits from the Movie class and includes a scareLevel attribute", function() {
        let insidious = new Horror("Insidious", 103, 6.8, 8);
        let regularMovie = new Movie("The Lion King", 117, 8.0);

        expect(insidious.scareLevel).to.equal(8);
        expect(regularMovie.scareLevel).to.be.undefined;

        expect(insidious instanceof Horror).to.be.true;
        expect(insidious instanceof Movie).to.be.true;
    });
});

describe("Comedy class", function() {
    it("inherits from the Movie class and includes a laughsPerMinute attribute", function() {
        let dumbAndDumber = new Comedy("Zoolander", 107, 7.3, 4);
        let regularMovie = new Movie("Gladiator", 155, 8.5);

        expect(dumbAndDumber.laughsPerMinute).to.equal(4);
        expect(regularMovie.laughsPerMinute).to.be.undefined;

        expect(dumbAndDumber instanceof Comedy).to.be.true;
        expect(dumbAndDumber instanceof Movie).to.be.true;
    });
});

describe("Action class", function() {
    it("inherits from the Movie class and includes an explosionCount attribute", function() {
        let dieHard = new Action("Die Hard", 132, 8.2, 15);
        let regularMovie = new Movie("The Notebook", 124, 7.8);

        expect(dieHard.explosionCount).to.equal(15);
        expect(regularMovie.explosionCount).to.be.undefined;

        expect(dieHard instanceof Action).to.be.true;
        expect(dieHard instanceof Movie).to.be.true;
    });
});
