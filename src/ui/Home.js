import React from 'react'
import { Link } from 'react-router'
import { getAlbums } from 'api/albums'

const HomeContainer = React.createClass({
  getInitialState: function () {
    return {
      albums: []
    }
  },
  componentWillMount: function() {
    getAlbums().then(albums => {
      this.setState({
        albums: albums.data
      })
    })
  },
  render: function () {
    return (
      <Home albums={this.state.albums} />
    )
  }
})

const Home = React.createClass({
  render: function () {
    return (
      <div>
        <h1>My Albums</h1>
        <ul className="albums">
          {this.props.albums.map(album => {
            return (
              <li key={album.id}>
                <Link to={`album/${album.id}`}>
                  <div>
                    <img src={album.cover} />
                    <span>{album.name}</span>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
})

export default HomeContainer