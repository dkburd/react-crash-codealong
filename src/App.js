import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos'

// function App() {
//   return (
//     <div className="App">
//       <h1>App</h1>
//     </div>
//   );
// }

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
      title: 'Dinner with Aaron',
      completed:false
    },
    {
      id:3,
      title: 'Meeting with boss',
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


  render(){
    console.log(this.state.todos)
  return (
    <div className="App">
      {/* passing the todos fom state into todos as a prop */}
      <Todos todos={this.state.todos} markComplete={this.markComplete}
      deleteTodo={this.deleteTodo}
      />
    </div>
  );
}
}

export default App;

