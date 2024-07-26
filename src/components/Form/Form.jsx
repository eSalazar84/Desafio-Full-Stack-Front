import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Form.css'
import { createTask } from "../../service/taskService";


function Form() {
    const [addTask, setAddTask] = useState({})
    const navigate = useNavigate();


    async function handleSubmit(e) {
        e.preventDefault()
        const task = { ...addTask }

        try {
            await createTask(task)
            navigate('/')
            window.location.reload();
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async function handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        setAddTask(prev => ({ ...prev, [name]: value }))
    }

    return (
        <>
            <h1>Registra una nueva tarea!</h1>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="title">
                    Título:
                    <input type="text" name="title" id="title" onChange={handleChange} />
                </label>
                <label htmlFor="description">
                    Descripción:
                    <input type="text" name="description" id="description" onChange={handleChange} />
                </label>
                <label htmlFor="status">
                    Estado:
                    <select
                        type="text"
                        name="status"
                        id="status"
                        onChange={handleChange}
                    >
                        <option value="to_do">Para Hacer</option>
                        <option value="in_progress">En Progreso</option>
                        <option value="done">Listo!</option>
                    </select>
                </label>
                <div>

                    <button type="submit">Agregar</button>
                    <button onClick={() => navigate('/')}>Volver</button>
                </div>


            </form>
        </>
    )
}

export default Form;