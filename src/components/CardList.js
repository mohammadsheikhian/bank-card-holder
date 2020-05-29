import React, { Component } from 'react'
import CardView from './CardView'

class CardList extends Component {
  state = {
    cards: []
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        cards: [
          {
            id: 1,
            title: 'card 1'
          },
          {
            id: 2,
            title: 'card 2'
          },
          {
            id: 3,
            title: 'card 3'
          },
          {
            id: 4,
            title: 'card 4'
          }
        ]
      })
    }, 2000)
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>List of cards</h1>
        <div className="row" style={{ justifyContent: 'center' }}>
          {this.state.cards.map((card) => (
            <CardView key={card.id} card={card} />
          ))}
        </div>
      </div>
    )
  }
}

export default CardList
