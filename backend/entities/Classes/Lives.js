const Advertisements = require("./Advertisements")
const Streamers = require("./Streamers")

module.exports = Lives = () => {
    return {
        streamer: Streamers(),
        date: Date,
        viewersQuant: Number,
        receivedValue: Number,
        total: Number,
        displayedAds: Advertisements()
    }
}