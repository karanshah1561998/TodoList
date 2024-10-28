import TodoItems from './TodoItems';
import todo_icon from '../assets/todo_icon.png';
import { useEffect, useRef, useState } from 'react';

const Todo = () => {
    const [todoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);
    const inputRef = useRef();

    const add = () => {
        const inputText = inputRef.current.value.trim();
        if (!inputText) return;

        const newTodo = { 
            id: Date.now(),
            text: inputText,
            isComplete: false
        };

        setTodoList((prev) => [...prev, newTodo]);
        inputRef.current.value = "";
    };

    const saveEdit = (id, newText) => {
        setTodoList((prevTodos) =>
            prevTodos.map((todo) => todo.id === id ? { ...todo, text: newText } : todo)
        );
    };

    const deleteTodo = (id) => {
        setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const toggle = (id) => {
        setTodoList((prevTodos) => 
            prevTodos.map((todo) => todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo)
        );
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") add();
    };

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todoList));
    }, [todoList]);

    return (
        <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-5 min-h-[550px] rounded-xl">
            <div className="flex items-center mt-2 gap-2" role="heading" aria-level="1">
                <img alt="Todo Icon" src={todo_icon} className='w-8' />
                <h1 className="text-3xl font-semibold">Todo List</h1>
            </div>

            <div className='flex items-center my-7 bg-gray-200 rounded-xl'>
                <input
                    type='text'
                    ref={inputRef}
                    onKeyDown={handleKeyPress}
                    placeholder='Add a Task Here'
                    aria-label="Add a Task Here"
                    className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-500 rounded-xl focus:outline-none "
                />
                <button
                    onClick={add}
                    className='border-none rounded-xl bg-orange-600 w-24 h-14 text-white text-lg font-medium cursor-pointer focus:outline-none  hover:shadow-[0_0_0_3px_rgba(234,88,12,1),_0_0_0_6px_rgba(234,88,12,0.3)] focus:shadow-[0_0_0_3px_rgba(234,88,12,1),_0_0_0_6px_rgba(234,88,12,0.3)]'
                    aria-label="Add Task"
                >
                    Add
                </button>
            </div>

            <div className="h-80 mb-1 overflow-y-auto" aria-live="polite" role="list" aria-label="List of tasks">
                {todoList.map((item) => (
                    <TodoItems
                        key={item.id}
                        {...item}
                        saveEdit={saveEdit}
                        deleteTodo={deleteTodo}
                        toggle={toggle}
                    />
                ))}
            </div>

            <div className="flex justify-center mt-3">
                <div className="flex items-center w-40 text-center text-gray-500 mt-3 border border-black rounded-lg px-4 py-2" aria-live="polite">
                    Total Tasks - {todoList.length}
                </div>
            </div>
            
        </div>
    );
};

export default Todo;