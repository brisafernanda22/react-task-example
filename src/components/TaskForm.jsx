import {useContext, useState} from 'react'
import {TaskContext} from '../context/TaskContext'


function TaskForm() {
    
    const [title, setTitle] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const {createTask} = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title,descripcion)
        createTask({
            title,
            descripcion
        });
        setTitle('')
        setDescripcion('')
    };

    return (
        <div className='max-w-md mx-auto'>
            <form onSubmit = {handleSubmit} className="bg-slate-800 p-10 mb-4">
            <h1 className='text-2x1 font-bold text-white mb3'>Crea tu tarea</h1>
            <input placeholder="Escribe tu tarea"
            onChange = {(e) => setTitle(e.target.value)} 
            value={title} 
            className ="bg-slate-300 p-3 w-full mb-2"
            autoFocus
            />
            <textarea placeholder='Escribe la descripcion de la tarea' onChange={(e) => setDescripcion(e.target.value)} value={descripcion}
            className ="bg-slate-300 p-3 w-full mb-2"></textarea>
            <button className='bg-indigo-500 px-3 py-1'>
                Guardar
            </button>
        </form>
        </div>
    );
}

export default TaskForm