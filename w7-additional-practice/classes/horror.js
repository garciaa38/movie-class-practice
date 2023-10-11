const Movie = require('./movie');

class Horror extends Movie {
    constructor(title, duration, rating, scareLevel) {
        super(title, duration, rating);
        this.scareLevel = scareLevel;
    }

    addScare() {
        this.scareLevel++;
    }

}

module.exports = {Horror};
