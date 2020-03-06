import React, { Component } from 'react';
import TodoList from './TodoList';

class App extends Component {
  state ={
    tasks: ['nuhuu']
  }

  handleProps = (task) => {
    this.state.tasks.push(task)
  }

  render () {
    return (
      <div>
        <TodoList handleProps={this.handleProps}/>
        {this.state.tasks.map(item => (
          <p key={item.id}>{item}</p>
        ))}
      </div>
    );
  }
}

export default App;
