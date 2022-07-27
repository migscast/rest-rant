const db = require('../models')

// To use await, we need an async function.
async function seed() {
    // Get the place
    let place = await db.Place.findOne({ name: 'Shokugeki no Restaurant' })

    //Create a sample comment
    let comment = await db.Comment.create({
        author: 'Rude Russel',
        rant: false,
        stars: 5-0,
        content: 'If you saw the anime, you know.'
    })

    //Add coment to coment array
    place.comments.push(comment.id)

    //save the place now that it has a comment
    await place.save()

    //exit progress
    process.exit()
}

seed()
