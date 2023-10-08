const { expect } = require("chai");

const Movie = require("../classes/movie.js");
const Actor = require("../classes/actor.js");


describe("Actor class", function() {
    it("should set the actor's name on creation", function() {
        let actor = new Actor("Leonardo DiCaprio");

        expect(actor.name).to.equal("Leonardo DiCaprio");
    });
});


describe("Movie class", function() {
    it("should have a cast which can be populated with actor instances", function() {
        let movie = new Movie("Inception", 148, 8.8);
        let leo = new Actor("Leonardo DiCaprio");
        let ellen = new Actor("Ellen Page");

        movie.cast.push(leo);
        movie.cast.push(ellen);

        expect(movie.cast).to.deep.include.members([leo, ellen]);
    });


    it("should correctly determine if an actor is in the movie", function() {
        let movie = new Movie("The Departed", 151, 8.5);
        let leo = new Actor("Leonardo DiCaprio");
        movie.cast.push(leo);


        expect(Movie.actorInMovie(movie, "Leonardo DiCaprio")).to.be.true;
        expect(Movie.actorInMovie(movie, "Tom Hanks")).to.be.false;
    });
});
