class Movie {
    constructor(title, duration, rating) {
        this.title = title;
        this.duration = duration;
        this.rating = rating;
    }

    isLong() {
        return this.duration > 150;
    }

    updateRating(newRating) {
        this.rating = newRating;
    }
}

module.exports = Movie;
