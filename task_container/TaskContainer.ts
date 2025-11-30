export class TaskContainer {
  private taskList: { task: string; priority: number }[] = [];

  add(taskToAdd: string, priority: number = 0) {
    let localPriority = !priority ? 0 : priority;

    const setupObjectToAdd = { task: taskToAdd, priority: localPriority };

    this.taskList.push(setupObjectToAdd);
  }

  getHighestPriority() {
    if (!this.taskList.length) {
      return null;
    }

    const localList = [...this.taskList];

    const sortedList = localList.sort((a, b) => b.priority - a.priority);

    const topTask = sortedList[0];

    return topTask.task;
  }

  count() {
    return this.taskList.length;
  }

  filterByPriority(min: number) {
    const localList = [...this.taskList];

    const filteredList = localList.filter((taskObj) => {
      return taskObj.priority >= min;
    });

    return filteredList;
  }

  find(taskToFind: string) {
    const listToFind = this.taskList.find((taskObj) => {
      if (taskObj.task === taskToFind) {
        return taskObj;
      }
    });

    if (!listToFind) {
      return null;
    }

    return listToFind?.priority;
  }

  reset() {
    this.taskList = [];
  }

  // remove(taskToRemove: string) {
  //   const indexofTask = this.taskList.indexOf(taskToRemove);

  //   if (indexofTask === -1) {
  //     return false;
  //   }

  //   this.taskList.splice(indexofTask, 1);

  //   return true;
  // }

  list() {
    const finalList = [...this.taskList];

    return finalList;
  }
}
