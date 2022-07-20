const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 className="inactive">
      No comments yet
    </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className='border'>
          <h2 className='rant'>{c.rant ? 'Rant' : 'Rave'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <strong> - {c.author}</strong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
            <h3>Located in {data.place.city}, {data.place.state}</h3>
            <h2>Rating</h2>
            <h2>Description</h2>
            <h3>{data.place.showEstablished()}</h3>
            <h4>serving {data.place.cuisines}</h4>
            <h3>Comments</h3>
            {comments}
            <a href={`/places/${data.id}/comment`} className="btn" id="comment-btn">
              Leave a Comment
            </a>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
              Edit
            </a>
            <form action={`/places/${data.id}?_method=DELETE`} method='POST' >
              <button type='submit' className='btn btn-danger'>
                Delete
              </button>
            </form>
          </main>
        </Def>
    )
}

module.exports = show
