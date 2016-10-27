import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render: function () {
    return (
      <div>
        <h1>Album {this.props.params.id}</h1>
        <ul className="photos">
          <li>
            <Link to="/photo/1">
              <div>
                <img src="http://placehold.it/300/300" />
                <span>Photo 1</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/photo/2">
              <div>
                <img src="http://placehold.it/300/300" />
                <span>Photo 2</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/photo/3">
              <div>
                <img src="http://placehold.it/300/300" />
                <span>Photo 3</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/photo/4">
              <div>
                <img src="http://placehold.it/300/300" />
                <span>Photo 4</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/photo/5">
              <div>
                <img src="http://placehold.it/300/300" />
                <span>Photo 5</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/photo/6">
              <div>
                <img src="http://placehold.it/300/300" />
                <span>Photo 6</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
})