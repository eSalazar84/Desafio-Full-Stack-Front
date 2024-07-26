import { useContext } from 'react';
import { TaskContext } from '../../context/taskContext';
import Card from '../../components/Card/Card';
import './Home.css'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate()
    const { task, error, isLoading } = useContext(TaskContext);

    const handleClick = () => {
        navigate('/NewTask');
    };

    if (isLoading) return <div><h1>Loading....</h1></div>;
    if (error) return <div><h1>{error}</h1></div>

    return (
        <>
            <header>
                <h1 className='title'>Lista de Tareas</h1>
            </header>
            <nav>
                <button className='btn-agregar' onClick={handleClick}>Agregar Tarea</button>
            </nav>
            <section className='layout'>
                {
                    task.map(task => <Card task={task} key={task.id} />)
                }
            </section>
        </>
    )
}

export default Home;