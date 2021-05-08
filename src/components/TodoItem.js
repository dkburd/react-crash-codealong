import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
getStyle = () => {
    return {
        backgroundColor: '#f4f4f4',
        borderBottom:'1px #ccc dotted',
        padding:'10px',
        textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
}
// the checkboxes use bind to link to the correct todo
//destructuring need to come in above the return 
    render() {
        const {id, title}=this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type='checkbox' onChange={this.props.markComplete.bind(this, id)}/> {' '}
                    {title}
                    <button onClick={this.props.deleteTodo.bind(this, id)}style={btnStyle}>x</button>
                    </p>
            </div>
        )
    }
}

//propTypes
TodoItem.propTypes={
    todo:PropTypes.object.isRequired
}

const btnStyle ={
    background:'#ff0000',
    color:'#f4f4f4',
    border:'none',
    padding:'5px',
    borderRadius: '50%', 
    cursor:'pointer',
    float: 'right'
}
export default TodoItem



// style in variable
// export class TodoItem extends Component {
//     render() {
//         return (
//             <div style={itemStyle}>
//                 <p>{this.props.todo.title}</p>
//             </div>
//         )
//     }
// }

// const itemStyle={
//     backgroundColor:'#444'
// }