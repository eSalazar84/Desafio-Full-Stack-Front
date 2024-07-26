import { React } from 'react';
import './Card.css'
import { removeTask } from '../../service/taskService';

function Card({ task, onTaskRemoved }) {
    const { id, title, description, status, createdAt } = task

    const handleClick = async () => {
        try {
            await removeTask(id);
            if (onTaskRemoved) {
                onTaskRemoved(id);
            }
        } catch (error) {
            console.error('Error eliminando la tarea:', error);
        }
    };

    return (
        <article id={id} className='card' >
            <h2>{title}</h2>
            <h3>{description}</h3>
            <h5>Cargado el: {new Date(createdAt).toLocaleDateString()}</h5>
            <h4>Estado: {status}</h4>
            <div>
                <button onClick={() => handleClick()}>Eliminar Tarea</button>
            </div>
        </article>
    )
}

export default Card;