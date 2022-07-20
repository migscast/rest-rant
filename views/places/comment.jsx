const React = require('react')
const Def = require('../default.jsx')

function commenting(data) {
    return(
        <Def>
            <main>
                <h1>Leave a Comment</h1>
                <form method="POST" action={`/places/${data.id}?_method=PUT`}>
                <div className="form-group col-sm-6">
                    <label htmlFor="author">Place Name</label>
                    <input className="form-control" type="text" id="author" name="author" value={data.place.author} />
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="content">Your Thoughts</label>
                    <input className="form-control" type="text" id="content" name="content" value={data.place.content} />
                </div>
               
                
                </form>
            </main>
        </Def>
    )
}

module.exports = commenting