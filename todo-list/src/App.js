import React, { Component } from 'react'
import DisplayList from './DisplayList';
import AddTodo from './AddTodo'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>My to do list</h1>
        <h3>affichage de la liste</h3>
        <AddTodo/>
        <DisplayList/>
      </div>
    )
  }
}



