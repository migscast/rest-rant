# Project REST-Rant

REST-Rant is an app where users can review restaurants.

|Method | Path | Purpose|
|--------|-------|-------|
|GET| / | Home Page|
|GET| /places| Places index page|
|POST|/places|Create new place
|GET| /places/new|Form page for creating a new place
|GET| /places/:id|details about a particular place
|PUT|/places/:id|update a particular place
|GET|/places/:id/edit|Form page for editing an existing place
|DELETE|/places/:id|Delete a particular place
|POST|/places/:id/rant|Create a rant(comment) about a particular place
|DELETE|/places/:id/rant/:rantld|Delete a rant(comment) about a particular place
|GET|*|404 page (matches any route not defined above)

#RESTAURANTS

|Name|City|State|Cuisines|Pics|
|-------|--------|---|-----|------|
|Puzzles|Jersey City|NJ|Bar Food|Puzzle Piece|
|Shokugeki no Restaurant|New York City|NY|Anime Food|Manga Meat|