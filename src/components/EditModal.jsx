import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const EditModal = ({ currentText, onSave, onClose }) => {
    const [editText, setEditText] = useState(currentText);
    const inputRef = useRef(null);
    const cancelButtonRef = useRef(null);
    const saveButtonRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleSave = () => {
        if(editText.trim() !== ""){
            onSave(editText);
            onClose();
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && editText.trim() !== "") {
            handleSave();
        } else if (event.key === 'Escape') {
            onClose();
        }
    };

    const trapFocus = (event) => {
        const focusableElements = [inputRef.current, cancelButtonRef.current, saveButtonRef.current];
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.key === 'Tab') {
            if (event.shiftKey) {
                // Shift + Tab
                if (document.activeElement === firstElement) {
                    event.preventDefault();
                    lastElement.focus();
                }
            } else {
                // Tab
                if (document.activeElement === lastElement) {
                    event.preventDefault();
                    firstElement.focus();
                }
            }
        }
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onKeyDown={trapFocus} // Trap focus within modal
        >
            <div className="bg-white rounded-lg p-6 w-80 shadow-lg" role="document">
                <h2 id="modal-title" className="text-lg font-semibold text-center mb-4">
                    Update Task
                </h2>
                <input
                    type="text"
                    value={editText}
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setEditText(e.target.value)}
                    className="w-full px-4 py-2 border-2 border-black rounded-md focus:outline-none focus:border-blue-500"
                    ref={inputRef}
                    aria-label="Edit task"
                />
                <div className="flex justify-end mt-4">
                    <button
                        ref={cancelButtonRef}
                        onClick={onClose}
                        className="px-4 py-2 border-2 border-black rounded-md mr-2 text-black hover:bg-blue-100"
                        aria-label="Cancel edit"
                    >
                        Cancel
                    </button>
                    <button
                        ref={saveButtonRef}
                        onClick={handleSave}
                        className="px-4 py-2 bg-blue-600 rounded-md text-white hover:bg-blue-800"
                        aria-label="Save changes"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

EditModal.propTypes = {
    currentText: PropTypes.string.isRequired,
    onSave: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
};

export default EditModal;