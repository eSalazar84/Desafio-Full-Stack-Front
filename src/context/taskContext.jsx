import React, { createContext, useState, useEffect, useContext } from 'react';
import { getAllTask, createTask, removeTask, BASE_URL } from '../service/apirest';

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
    const [task, setTask] = useState([])


    useEffect(() => {
        setTask(getAllTask())
    }, [])

    return (
        <TaskContext.Provider value={task}>
            {children}
        </TaskContext.Provider>
    )

}
