import React, {Component} from 'react';
import './TaskApp.css'
import {withTasks} from "../contexts/Tasks";
import TaskList from "../TaskList/TaskList";
import TaskNav from '../TaskNav/TaskNav';
import TaskUserPanel from "../TaskUserPanel/TaskUserPanel";

class TaskApp extends Component {
  render() {
    return (
      <div className="task-app">
        {
          this.props.currentForm === null
            ? <div>
            <TaskUserPanel/>
                <TaskList/>
                <TaskNav/>
            </div>
            : this.props.displayForm(this.props.currentForm)
        }
      </div>
    )
  }
}

export default withTasks(TaskApp);