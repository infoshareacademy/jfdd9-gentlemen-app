import React, {Component} from 'react'
import './TaskList.css'
import TaskContent from "../TaskContent/TaskContent";
import TaskSearch from "../TaskSearch/TaskSearch";

// import TaskEditForm from './TaskEditForm';

class TaskList extends Component {
  state = {
    editTaskId: null,
    searchPhrase: ''
  };

  enterEditMode = taskId => {
    this.setState({editTaskId: taskId})
  };
  exitEditMode = () => {
    this.setState({editTaskId: null})
  };

  updateSearchPhrase = searchPhrase => this.setState({searchPhrase})

  render() {

    const tasks = this.props.tasks.filter(
      task => task.name.toLowerCase().includes(this.state.searchPhrase.toLowerCase())
    )
    console.log(tasks.slice().sort((a, b) => a.dueDate.isBefore(b.dueDate) ? -1 : a.dueDate.isAfter(b.dueDate) ? 1 : 0))
    return (
      <div>
        <TaskSearch
            updateSearchPhrase={this.updateSearchPhrase}
          />
        {
          tasks.length === 0 ?
            <p>Brak wyników</p> :
            <ul>
              {
                tasks.map(
                  task => (
                    <li key={task.id}>
                        <TaskContent
                        task={task}
                        enterEditMode={this.enterEditMode}
                        removeTask={this.props.removeTask}
                        toggleTaskDone={this.props.toggleTaskDone}
                        toggleTaskImportant={this.props.toggleTaskImportant}
                        toggleShowEditTaskPopup={this.props.toggleShowEditTaskPopup}
                        />
                    </li>
                  )
                )
              }
            </ul>
        }

      </div>
    )
  }
}

export default TaskList