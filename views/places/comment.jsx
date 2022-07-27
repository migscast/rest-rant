const React = require('react')
const Def = require('../default.jsx')
const express = require('express')

function comment(data) {
    console.log()
    return (
        <Def>
            <main>
                <h1>Leave a Comment</h1>
                <form method="POST" action={`/places/${data.place.id}/comment`}>
                <div className="form-group col-sm-6">
                    <label htmlFor="author">Commentor</label>
                    <input className="form-control" type="text" id="author" name="author" />
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="content">Your Thoughts</label>
                    <input className="form-control" type="text" id="content" name="content"  />
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor='stars'>Rating</label> 
                    <input type="number" id='stars' name='stars' min='1.0' max='5.0' step={0.5} /> 
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor='rant'>Rant or Rave</label>
                    <input type='checkbox' id='rant' name='rant' />
                </div>
                <input className="btn btn-primary"  type="submit" value="Post Comment" />
                
                </form>
            </main>
        </Def>
    )
}

module.exports = comment