const router = require('express').Router()

// More code here in a moment
router.get('/new', (req, res) => {
    res.render('places/new')
  })
  

router.get('/', (req,res) => {

    
        let places = [{
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
        }]

        res.render('places/index', {places})
    
})

module.exports = router
