const Movie = require('./movie.js');

class Action extends Movie {
    constructor(title, duration, rating, explosionCount) {
        super(title, duration, rating);
        this.explosionCount = explosionCount;
    }

    isExplosionOverloaded() {
        return this.explosionCount >= 10;
    }

}

module.exports = Action;
