import moment from "moment/moment";
import {nameToValue} from "../../_utils/priority";

export default function organizeTasks() {
  const tasks = this.props.tasks.filter(
    task => this.props.isDoneSortMode === '1'
      ? task.isDone === true
      : true
  ).filter(
    task => this.props.isDoneSortMode === '2'
      ? task.isDone === false
      : true
  ).filter(
    task => task.name.toLowerCase().includes(
      this.props.searchPhrase.toLowerCase()
    )
  );

  if (this.props.dueDateSortMode === '1') {
    tasks.sort(
      (a, b) => moment(a.dueDate).isBefore(b.dueDate)
        ? -1
        : moment(a.dueDate).isAfter(b.dueDate) ? 1 : 0
    )
  } else if (this.props.dueDateSortMode === '2') {
    tasks.sort(
      (a, b) => moment(a.dueDate).isBefore(b.dueDate)
        ? 1
        : moment(a.dueDate).isAfter(b.dueDate) ? -1 : 0
    )
  }

  if (this.props.prioritySortMode === '1') {
    tasks.sort(
      (a, b) => nameToValue(b.priority) - nameToValue(a.priority)
    )
  } else if (this.props.prioritySortMode === '2') {
    tasks.sort(
      (a, b) => nameToValue(a.priority) - nameToValue(b.priority)
    )
  }

  return tasks
}