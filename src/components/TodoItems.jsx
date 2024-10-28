import tick_1 from '../assets/tick_1.png';
import not_tick_1 from '../assets/not_tick_1.png';
import edit_icon_1 from '../assets/edit_1.png'; 
import delete_icon_1 from '../assets/delete_1.png';
import EditModal from './EditModal';
import PropTypes from 'prop-types';
import { useState } from 'react';

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle, saveEdit }) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleEditClick = () => {
        setIsEditModalOpen(true);
    };

    const handleSaveEdit = (updatedText) => {
        saveEdit(id, updatedText);
        setIsEditModalOpen(false);
    };

    const handleKeyDown = (event, action) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            action();
        }
    };

    return (
        <div className="flex items-center justify-between my-1 gap-2">

            <div
                role="button"
                tabIndex={0}
                aria-pressed={isComplete}
                onClick={() => toggle(id)}
                onKeyDown={(e) => handleKeyDown(e, () => toggle(id))}
                className="flex items-center cursor-pointer"
                aria-label={isComplete ? "Mark as incomplete" : "Mark as complete"}
            >
                <img
                    alt={isComplete ? "Mark as incomplete" : "Mark as complete"}
                    className="w-7"
                    src={isComplete ? tick_1 : not_tick_1}
                />
            </div>

            <p
                className={`text-slate-700 flex-1 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : ""} overflow-hidden text-ellipsis whitespace-nowrap`}
                tabIndex={0}
                aria-label={`Task: ${text}`}
            >
                {text}
            </p>

            <div
                role="button"
                tabIndex={0}
                onClick={handleEditClick}
                onKeyDown={(e) => handleKeyDown(e, handleEditClick)}
                aria-label="Edit task"
                className={`w-4 cursor-pointer ${isComplete ? "opacity-0" : "hover:border border-blue-600"}`}
            >
                <img src={edit_icon_1} alt="Edit task" />
            </div>

            <div
                role="button"
                tabIndex={0}
                onClick={() => deleteTodo(id)}
                onKeyDown={(e) => handleKeyDown(e, () => deleteTodo(id))}
                aria-label="Delete task"
                className="w-4.1 cursor-pointer hover:border border-red-600"
            >
                <img src={delete_icon_1} alt="Delete task" />
            </div>

            {isEditModalOpen && (
                <EditModal
                    currentText={text}
                    onSave={handleSaveEdit}
                    onClose={() => setIsEditModalOpen(false)}
                />
            )}
        </div>
    );
};

TodoItems.propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isComplete: PropTypes.bool,
    deleteTodo: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
    saveEdit: PropTypes.func.isRequired
};

export default TodoItems;