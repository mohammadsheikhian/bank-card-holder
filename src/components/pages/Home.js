import React, { Component } from 'react'
import CardList from './../CardList'

export default class Home extends Component {
  render() {
    console.log('home')
    return (
      <div>
        <h1>Home</h1>
        <CardList />
      </div>
    )
  }
}
