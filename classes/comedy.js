const Movie = require('./movie.js');

class Comedy extends Movie {
    constructor(title, duration, rating, laughsPerMinute) {
        super(title, duration, rating);
        this.laughsPerMinute = laughsPerMinute;
    }

    isLaughRiot() {
        return this.laughsPerMinute >= 5;
    }

}

module.exports = Comedy;
