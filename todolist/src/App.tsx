import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./component/Todolist";

export type FilterValueType ="all" | "completed" | "active"


function App() {



    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: "CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "Redux", isDone: true}
    ]);
    let [filter, setFilter] = useState<FilterValueType>("all")

    function removeTask(id: number) {
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
            />


        </div>
    )
}

export default App;
