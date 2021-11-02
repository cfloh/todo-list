import {Component} from 'react';
import Panel from "./Panel"
import PropTypes from 'prop-types'

class TodoList extends Component {
    render() {
        return (
        <Panel title="Todos">
          <ul className="App-Todo">
            {this.props.todos.map((todo) => {
              return (
                <li key={todo.id}>#{todo.id}: {todo.title}</li>
              )
            })}
          </ul>
        </Panel>
        )
    }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
  
}

export default TodoList;