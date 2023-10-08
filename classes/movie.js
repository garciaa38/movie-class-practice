class Movie {
    constructor(title, duration, rating) {
        this.title = title;
        this.duration = duration;
        this.rating = rating;
        this.cast = []
    }

    isLong() {
        return this.duration > 150;
    }

    updateRating(newRating) {
        this.rating = newRating;
    }

    static actorInMovie(movie, actorName) {
        return movie.cast.some(actor => actor.name === actorName);
    }

}

module.exports = Movie;
