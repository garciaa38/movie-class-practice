const Movie = require('./movie.js');

class Horror extends Movie {
    constructor(title, duration, rating, scareLevel) {
        super(title, duration, rating);
        this.scareLevel = scareLevel;
    }

    isSuperScary() {
        return this.scareLevel >= 8;
    }

}

module.exports = Horror;
