import React, { useState } from "react";

const ChatInput = ({ onSendMessage }) => {
    const [input, setInput] = useState("");  // State to store user input

    // Handle input change
    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    // Handle form submit (send message)
    const handleSubmit = (event) => {
        event.preventDefault();
        if (input.trim()) {
            onSendMessage(input); // Send the message to the parent
            setInput(""); // Clear the input after sending
        }
    };

    return (
        <div className="flex items-center justify-between p-2">
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Type your message"
                className="w-full p-2 border rounded-l-lg"
            />
            <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white p-2 rounded-r-lg ml-2"
            >
                Send
            </button>
        </div>
    );
};

export default ChatInput;
