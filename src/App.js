import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/layout/Header'
import './App.css';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import About from './components/pages/About';
// import uuid from 'uuid'
//BrowserRouter as Router means Router is the alias for BrowserRouter

class App extends Component{
state={
  todos:[
    {
      id:1,
      title: 'Take out the trash',
      completed:false
    },
    {
      id:2,
      title: 'Feed cat',
      completed:false
    },
    {
      id:3,
      title: 'Homework',
      completed:false
    }

  ]
}

//toggles the complete for clicked/changed id called with the event listener in TodoItem.js 

markComplete = (id) => {
    // console.log(id)
    this.setState({todos:this.state.todos.map(todo =>{
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })});
}

// use filter method to return an array that only matches ids that are not passed in 
//... is the spread operator 
deleteTodo = (id) => {
// console.log(id)
this.setState({todos:[...this.state.todos.filter(todo => todo.id !== id)]})

}

//add todo
addTodo = (title) => {
  // console.log(title)
  const newTodo = {
    id: title,
    title: title,
    completed: false
  }
this.setState({todos:[...this.state.todos, newTodo]})

}


  render(){
    console.log(this.state.todos)
  return (
    <Router>
    <div className="App">
      <div className='container'>
        <Header/>
        <Route exact path='/' render={props => (
          <React.Fragment>
            <AddTodo addTodo={this.addTodo}/>
            {/* passing the todos fom state into todos as a prop */}
            <Todos todos={this.state.todos} markComplete={this.markComplete}
            deleteTodo={this.deleteTodo}
            />
          </React.Fragment>
        )} />
        <Route path='/about' component={About} />
      </div>
    </div>
  </Router>
  );
}
}

export default App;

