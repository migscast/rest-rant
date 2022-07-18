const mongoose = require('mongoose')

const { Schema } = mongoose

const placeSchema = new Schema({
    name: {type: String, required: true},
    pic: {type: String, default: '/images/bear-pancakes.jpg'},
    cuisines: {type: String, required: true},
    city: {type: String, default: 'Anytown'},
    state: {type: String, default: 'USA'},
    founded: { type: Number, min: [1800, "Can't be older"], max: [new Date().getFullYear(), "Greetings, From the world of tomorrow!!"]}
})

placeSchema.methods.showEstablished = function() {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

const Place= mongoose.model('Place', placeSchema)

module.exports = Place

/*module.exports =  [
    {    
        name: 'Puzzles',
        city: 'Jersey City',
        state: 'NJ',
        cuisines: 'Bar Food',
        pic: '/images/puzzle-piece.jpg'
    },{
        name: 'Shokugeki no Restaurant',
        city: 'New York City',
        state: 'NY',
        cuisines: 'Anime Food',
        pic: '/images/manga-meat.jpg'
    
}]*/

