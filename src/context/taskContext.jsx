import { createContext, useState, useEffect, useCallback } from "react";
import { getAllTask, BASE_URL } from '../service/taskService';

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
    const [task, setTask] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = useCallback(async () => {
        try {
            setError(null)
            setIsLoading(true)
            const data = await getAllTask()
            setTask(data)
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <TaskContext.Provider value={{ task, error, isLoading, setTask, fetchData }}>
            {children}
        </TaskContext.Provider>
    )
}