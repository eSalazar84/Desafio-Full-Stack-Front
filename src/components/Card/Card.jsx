import { React } from 'react';
import './Card.css'

function Card({ task }) {
    const { id, title, description, status, createdAt } = task

    return (
        <article id={id} className='card' >
            <h2>{title}</h2>
            <h3>{description}</h3>
            <h5>Cargado el: {new Date(createdAt).toLocaleDateString()}</h5>
            <h4>Estado: {status}</h4>
            <div>
                <button >Eliminar Tarea</button>
            </div>
        </article>
    )
}

export default Card;