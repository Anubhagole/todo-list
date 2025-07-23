import React from 'react'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect, useRef } from 'react'


const Todo = () => {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])
    const [showCompleted, setShowCompleted] = useState(false)
    const inputRef = useRef(null)

    const toggleIsCompleted = (id) => {
        let idToUpdate = id
        const updatedTodos = todos.map(todo =>
            todo.id === idToUpdate ?
                { ...todo, isCompleted: !todo.isCompleted }
                : todo
        );
        setTodos(updatedTodos);
    };

    const enterTodo = (e) => {
        setTodo(e.target.value)
    }

    const handleAdd = () => {
        setTodos([...todos, { todo, isCompleted: false, id: uuidv4() }])
        setTodo("")
    }

    const handleEdit = (id) => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
        const t = todos.find(todo => {
            return todo.id === id
        })
        setTodo(t.todo)
        let updatedTodos = todos.filter(todo => todo.id !== id)
        setTodos(updatedTodos)
    }

    const handleDelete = (idToDelete) => {
        let updatedTodos = todos.filter(todo => todo.id !== idToDelete)
        setTodos(updatedTodos)
    }

    const toggleShowCompleted = () => {
        setShowCompleted(!showCompleted)
        console.log(showCompleted);
    }

    const hasLoaded = useRef(false);

    useEffect(() => {
        if (hasLoaded.current) return;
        const t = JSON.parse(localStorage.getItem("todos"))
        console.log(t);
        if (t)
            setTodos(t)
        hasLoaded.current = true;
    }, [])

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div>
            <div className='container mx-auto my-5 bg-violet-100 rounded-2xl p-4 min-h-[85vh] w-2/3'>
                {/* Add todo  */}
                <div className="addTodo my-5">
                    <h2 className='text-lg font-bold'>Add todo</h2>
                    <input ref={inputRef} type="text" name="" value={todo} id="" className='w-full bg-white  border border-gray-300 rounded-3xl px-2 py-1 mt-2' onChange={enterTodo} />
                    <button onClick={handleAdd} className='rounded-3xl bg-violet-900 hover:bg-violet-950 text-white px-2 py-1 m-2 font-medium disabled:bg-violet-200 disabled:cursor-not-allowed w-1/2 mx-auto block' disabled={!todo}>Add</button>
                </div>

                {/* Completed Todos */}
                <div className='flex justify-end'>
                    <button
                        onClick={toggleShowCompleted}
                        className={`px-2 py-1 rounded-3xl border transition text-sm
                          ${showCompleted
                                ? 'bg-violet-900 text-white border-violet-900'
                                : 'bg-transparent text-violet-900 border-violet-900 hover:bg-violet-50'}
                           `}
                    >
                        Show Finished
                    </button>
                </div>

                {/* Todos listed here  */}
                <h2 className='text-lg font-bold'>Your todos</h2>
                {todos.length === 0 && <div className='m-5'> No todos to display</div>}
                <div className="todos">
                    {todos.map((elem) => (

                        (showCompleted || !elem.isCompleted) && (
                            <div className='todo flex justify-between my-3' key={elem.id}>
                                <div className='flex'>
                                    {/* Todo Content  */}
                                    <span className={`${elem.isCompleted ? "line-through" : ""} px-5 text-gray-600 font-medium tracking-wide`} >{elem.todo}</span>
                                </div>

                                {/* Utility Buttons  */}
                                <div className="buttons flex gap-3">
                                    <button className={`px-2 py-1 rounded-md m-1 font-medium transition-all duration-200 
    ${elem.isCompleted
                                            ? 'bg-green-700 hover:bg-green-800 text-white'
                                            : 'bg-violet-900 hover:bg-violet-950 text-white'
                                        }`} onClick={() => toggleIsCompleted(elem.id)}><TiTick /></button>
                                    <button className='bg-violet-900 hover:bg-violet-950 text-white px-2 py-1 rounded-md m-1 font-medium' onClick={() => handleEdit(elem.id)}><MdEdit /></button>
                                    <button className='bg-violet-900 hover:bg-violet-950 text-white px-2 py-1 rounded-md m-1 font-medium' onClick={() => handleDelete(elem.id)}><MdDelete /></button>
                                </div>

                            </div>
                        )

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Todo
