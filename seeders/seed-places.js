const db = require('./models')

db.Place.create([{
    name: 'Puzzles',
    city: 'Jersey City',
    state: 'NJ',
    cuisines: 'Bar Food',
    pic: '/images/puzzle-piece.jpg',
    founded: 2012
},{
    name: 'Shokugeki no Restaurant',
    city: 'New York City',
    state: 'NY',
    cuisines: 'Anime Food',
    pic: '/images/manga-meat.jpg',
    founded: 2015
}])
.then(() => {
    console.log('Success')
    process.exit()
})
.catch(err => {
    console.log('Failure', err)
    process.exit()
})