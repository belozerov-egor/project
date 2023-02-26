import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./component/Todolist";
import {v1} from "uuid";

export type FilterValueType ="all" | "completed" | "active"


function App() {



    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "React", isDone: false},
        {id: v1(), title: "Redux", isDone: true}
    ]);
    let [filter, setFilter] = useState<FilterValueType>("all")

    function removeTask(id: string) {
        let filterTask = tasks.filter((t) => {
           return t.id !== id;

            /* if (t.id !== id) {
                return true
            }                       это тоже самое что и выше
            else
            {
                return false
            };*/
        })
        setTasks(filterTask);
    }

    function addTask(title: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        let newTasks = [newTask, ...tasks]
        setTasks(newTasks)
    }

    function changeFilter(value: FilterValueType) {
        setFilter(value);
    }

    let tasksForTodolist = tasks;
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true);
    }
    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false);
    }

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter = {changeFilter}
                      addTask={ addTask}
            />


        </div>
    )
}

export default App;
