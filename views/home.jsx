const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/ramen.jpg" alt="Ramen"/>
                    <div>
                        Photo by <a href="https://wallpapercave.com/anime-food-wallpapers">Caveman</a> on <a href="https://wallpapercave.com/">WallpaperCave</a>
                    </div>
                </div>
                <a href="/places">
                <button className="btn-primary">Places Page</button>
                </a>

            </main>
        </Def>
    )
}

module.exports = home