const React = require('react')
const Def = require('../default')

function show (data) {
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
