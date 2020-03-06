import React, { Component } from 'react';
import Button from './Button';

export default class TodoList extends Component {

  state = {
    task: [{
      id: Math.random(),
      text: ''
    }],
  }

  addTask = (ev) => {
    this.setState({
      task: ev.target.value
    })
  }

  clickedTask = (ev) => {
    ev.preventDefault()
    const {task} = this.state
    this.props.handleProps({task})

  }

  render() {
    return (
      <div>
        <form onSubmit={this.clickedTask}>
          <input placeholder="task" onChange={this.addTask}/>
          <Button
          text={"Enviar"}
          handleClick={this.clickedTask}

          />
        </form>
      </div>
    );
  }
}
