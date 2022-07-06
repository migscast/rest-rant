const router = require('express').Router()

// More code here in a moment
router.get('/', (req,res) => {

    
        let places = [{
            name: 'Puzzles',
            city: 'Jersey City',
            state: 'NJ',
            cuisines: 'Bar Food',
            pic: 'https://templatelab.com/wp-content/uploads/2017/04/puzzle-piece-template-13.jpg'
        },{
            name: 'Shokugeki no Restaurant',
            city: 'New York City',
            state: 'NY',
            cuisines: 'Anime Food',
            pic: 'https://ih1.redbubble.net/image.1051566249.2427/tst,small,507x507-pad,600x600,f8f8f8.jpg'
        }]
        res.render('places/index', {places})
    
})

module.exports = router
