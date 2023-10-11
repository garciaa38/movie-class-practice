const Actor = require('./actor');

class Movie{
    constructor(title, duration, rating) {
        this.title = title;
        this.duration = duration;
        this.rating = rating;
        this.cast = [];
    }

    isLong() {
        if (this.duration > 150) {
            return true;
        } else {
            return false;
        }
    }

    updateRating(rating) {
        this.rating = rating;
    }

    static actorInMovie(movie, actor) {
        for (let i = 0; i < movie.cast.length; i++) {
            console.log(movie.cast[i]);
            let castMember = movie.cast[i];
            if (castMember.name === actor) {
                return true;
            }
        }
        return false;
    }

}



// let movie = new Movie("The Godfather", 175, 9.2);
// let al = new Actor("Al Pacino");
// movie.cast.push(al);
// Movie.actorInMovie(movie, "Al Pacino");

module.exports = Movie;
