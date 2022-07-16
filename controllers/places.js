

const router = require('express').Router()
//const places = require('../models/places.js')
const db = require('../models')

//show
router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
        res.render('places/index', {places})
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
    })
  })
  
  //create
  router.post('/', (req, res) => {
    if(!req.body.pic){
      req.body.pic = undefined
    }
    if(!req.body.state) {
      req.body.state = undefined
    }
    if(!req.body.city) {
      req.body.city = undefined
    }
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
  })
  
  //new
  router.get('/new', (req, res) => {
    res.render('places/new')
  })
  
  //show
  router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .then(place =>{
        res.render('places/show', {place})
    })
    .catch(err =>{
        console.log('err', err)
        res.render('error404')
    })
  })
  
  //update
  router.put('/:id', (req, res) => {
    res.send('PUT /places/:id stub')
  })
  
  //delete
  router.delete('/:id', (req, res) => {
    res.send('DELETE /places/:id stub')
  })
  
  //edit
  router.get('/:id/edit', (req, res) => {
    res.send('GET edit form stub')
  })
  
  router.post('/:id/rant', (req, res) => {
    res.send('GET /places/:id/rant stub')
  })
  
  router.delete('/:id/rant/:rantId', (req, res) => {
      res.send('GET /places/:id/rant/:rantId stub')
  })
    
  
  module.exports = router
  

// More code here in a moment
//NEW
/*router.get('/new', (req, res) => {
    res.render(`places/new`)
  })
  //EDIT
  router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
        res.render('places/edit', {place: places[id], id})
    }
  })  
//SHOW
router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
     else{    
    res.render('places/show', { place: places[id], id } )
    }
  })
//INDEX
  router.get('/', (req,res) => {
        res.render(`places/index`, {places})
})


//POST
router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = '/images/bear-pancakes.jpg'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })
//UPDATE
  router.put('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        // Dig into req.body and make sure data is valid
        if (!req.body.pic) {
            // Default image if one is not provided
            req.body.pic = '/images/bear-pancakes.jpg'
        }
        if (!req.body.city) {
            req.body.city = 'Anytown'
        }
        if (!req.body.state) {
            req.body.state = 'USA'
        }
  
        // Save the new data into places[id]
        places[id] = req.body
        res.redirect(`/places`)
    }
  })
  

  
  //DELETE
  router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
        places.splice(id, 1)
        res.redirect('/places')
    }
  })*/
  
