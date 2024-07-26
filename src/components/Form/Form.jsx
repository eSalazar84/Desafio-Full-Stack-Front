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
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">
                        Título:
                        <input type="text" name="title" id="title" required onChange={handleChange} />
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
                            <option value="Para_hacer">Para Hacer</option>
                            <option value="En_progreso">En Progreso</option>
                            <option value="Hecho">Listo!</option>
                        </select>
                    </label>
                    <div>

                        <button type="submit">Agregar</button>
                    </div>
                </form>
                <div>
                    <button onClick={() => navigate('/')}>Volver</button>
                </div>
            </div>
        </>
    )
}

export default Form;