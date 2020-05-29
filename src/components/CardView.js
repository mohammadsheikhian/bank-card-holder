import React, { Component } from 'react'
import logo from '../logo.svg'
import './../css/bootstrap.min.css'
import { Link } from 'react-router-dom'

class CardView extends Component {
  render() {
    return (
      <div className="card" style={{ width: '18rem' }}>
        <img src={logo} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.card.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to={`/cards/${this.props.card.id}`}>More</Link>
        </div>
      </div>
    )
  }
}

export default CardView
