import React, { createContext, useState } from "react";
import { faker } from "@faker-js/faker";
import { Task } from "../models/Task";

interface ITaskContextProps {
  tasks: Task[],
  createTask: (taskTitle: string) => void,
  deleteTask: (idTask: string) => void;
  completeTask: (idTask: string) => void;
}

export const TaskContext = createContext({} as ITaskContextProps);

export default function TaskProvider ({ children }: any){

  const [ tasks, setTasks ] = useState<Task[]>([
    {_id: '1', title: 'Estudar React', isCompleted: false},
    {_id: '2', title: 'Comer fruta', isCompleted: true},
    {_id: '3', title: 'Estudar webpack', isCompleted: false},
  ])

  function createTask(taskTitle: string) {
    const newTask: Task = {
      _id: faker.datatype.uuid(),
      title: taskTitle,
      isCompleted: false
    }
    setTasks(oldState => [...oldState, newTask])
  }

  function deleteTask(idTask: string){
    setTasks(oldState => oldState.filter(task => task._id !== idTask))
  }

  function completeTask(idTask: string){
    const newTaskState: Task[] = [...tasks].map(task => {
      if(task._id == idTask){
        task.isCompleted = !task.isCompleted
      }
      return task
    })
    setTasks(newTaskState)
  }


  const store: ITaskContextProps = {
    tasks,
    createTask,
    deleteTask,
    completeTask
  }

  return (
    <TaskContext.Provider value={store}>
      {children}
    </TaskContext.Provider>
  )
}