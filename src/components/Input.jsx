import React, { useState } from 'react';

function Input({ taskList, setTaskList }) {
    const [input, setInput] = useState("");
    const [isHovered, setIsHovered] = useState(false); // State to track hover

    const handleAddClick = (e) => {
        e.preventDefault();

        // Ensure input is not empty before adding to the list
        if (input.trim() !== "") {
            setTaskList([...taskList, input]);
            setInput("");
        }
    };

    return (
        <>
            <form className="flex flex-row items-center gap-4" onSubmit={handleAddClick}>
                <input
                    className="border rounded-lg py-1.5 px-2.5 text-lg"
                    type="text"
                    placeholder="ADD A TASK"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    className={`py-2 px-3.5 rounded-lg font-semibold ${isHovered ? 'bg-yellow-400' : 'bg-violet-400'} ${isHovered ? 'text-black' : 'text-white'}`}
                    type="submit"
                    onMouseEnter={() => setIsHovered(true)} // Set hover to true
                    onMouseLeave={() => setIsHovered(false)} // Set hover to false
                >
                    ADD
                </button>
            </form>
        </>
    );
}

export default Input;
