import React, {Component} from 'react';
import './TaskPriority.css';

class TaskPriority extends Component {
  state = {
    activeButton: this.props.priority
  };

  handleClick = (event) => {
    const activeButtonName = event.currentTarget.name;
    this.setState({
      activeButton: activeButtonName
    });
    this.props.handlePriority(activeButtonName);
  };

  render(){
    const highButtonClass = this.state.activeButton === "high" ? "activeButtonHigh" : '';
    const mediumButtonClass = this.state.activeButton === "medium" ? "activeButtonMedium" : '';
    const lowButtonClass = this.state.activeButton === "low" ? "activeButtonLow" : '';

    return(
     <div>
      <button className={highButtonClass} name="high" onClick={this.handleClick}>!!!</button>
      <button className={mediumButtonClass} name="medium" onClick={this.handleClick}>!!</button>
      <button className={lowButtonClass} name="low" onClick={this.handleClick}>!</button>
     </div>
    )
  }
}

export default TaskPriority;