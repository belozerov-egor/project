import React, {ChangeEvent, FC, KeyboardEvent, MouseEvent, MouseEventHandler, useState} from "react";
import {FilterValueType} from "../App";

export type TaskType = {
    id: string
    title: string
    isDone: boolean

}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    changeFilter: (value: FilterValueType) => void
    addTask: (title: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void
    filter: FilterValueType

}

export const Todolist: FC<PropsType> = (props) => {
    const [newTaskTitle, setNewTaskTile] = useState("")
    const [error, setError] = useState<string | null>(null)

    const onNewTaskTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTile(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.key === 'Enter') {
            props.addTask(newTaskTitle);
            setNewTaskTile("");

        }
    }

    const addTask = () => {
        if (newTaskTitle.trim() === "") {
            return setError("Ошибка!!!!!")
        }else {
        props.addTask(newTaskTitle);
        setNewTaskTile("");
        }
    }


    const onAllClickHandler = () => props.changeFilter("all")
    const onActiveClickHandler = () => props.changeFilter("active")
    const onCompletedClickHandler = () => props.changeFilter("completed")


    return (
        <div className="todolist">
            <h3>{props.title}</h3>
            <div>
                <input
                    className={error ? "error" : "" }
                    value={newTaskTitle}
                    onChange={onNewTaskTitleChangeHandler}
                    onKeyUp={onKeyPressHandler}
                />
                {/*Кнопка добавить Таску!*/}
                <button onClick={addTask}>+</button>
                {error && <div className="error-message">{error}</div>}
            </div>
            <ul>
                {
                    props.tasks.map((t) => {
                        const onRemoveHandler = () => {
                            props.removeTask(t.id)
                        }
                        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            props.changeTaskStatus(t.id, e.currentTarget.checked)
                        }

                        return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                            <input onChange={onChangeHandler} type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={onRemoveHandler}> X</button>
                        </li>

                    })
                }
            </ul>
            <div>
                <button className={props.filter === 'all' ? "active-filter" : ""} onClick={onAllClickHandler}>All</button>
                <button className={props.filter === 'active' ? "active-filter" : ""} onClick={onActiveClickHandler}>Active</button>
                <button className={props.filter === 'completed' ? "active-filter" : ""} onClick={onCompletedClickHandler}>Completed</button>
            </div>
        </div>
    );
}

