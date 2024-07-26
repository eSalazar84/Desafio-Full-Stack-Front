import { React, useContext } from "react";
import { TaskContext } from "../../context/taskContext";

const Card = () => {

    const { task } = useContext(TaskContext)
    return (
        <>
            <div>
                <ul>
                    {task.map((item) => (
                            <li key={item.id}>
                                
                            <div>Titulo: {item.title} </div>
                            </li>
                        ))
                    }
                </ul>

            </div>
        </>
    )
}

export default Card;