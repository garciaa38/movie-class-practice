const Movie = require('./movie');

class Comedy extends Movie {
    constructor(title, duration, rating, laughsPerMinute) {
        super(title, duration, rating);
        this.laughsPerMinute = laughsPerMinute;
    }

    

}

module.exports = Comedy;
