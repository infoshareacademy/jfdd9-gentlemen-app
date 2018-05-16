import React, {Component} from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import TaskUserPanel from "../TaskUserPanel/TaskUserPanel";

class TaskNavUser extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <p><Link to="/taskuserpanel">link to taskUserPanel</Link></p>
          <Route path="/taskuserpanel" component={TaskUserPanel}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default TaskNavUser