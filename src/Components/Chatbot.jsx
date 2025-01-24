import React, { useState } from "react";
import ChatInput from "./ChatInput";

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [isVisible, setIsVisible] = useState(true);
    const [options, setOptions] = useState([]); // State to handle selective inputs (buttons)

    const generateBotResponse = (userMessage) => {
        const message = userMessage.toLowerCase();

        if (message.includes("hello") || message.includes("hi")) {
            setOptions([
                { label: "View Latest Shoes", value: "latest shoes" },
                { label: "Ask for Recommendations", value: "recommendations" },
                { label: "See Running Shoes", value: "running shoes" },
            ]);
            return "Hello! How can I assist you with Nike shoes today?";
        } else if (message.includes("latest") || message.includes("new") || message.includes("shoes")) {
            setOptions([]);
            return "The latest Nike shoes include Air Max, Air Zoom, and Pegasus 40. Would you like to know more?";
        } else if (message.includes("running") || message.includes("yes")) {
            setOptions([
                { label: "View Collection", value: "view collection" },
                { label: "Ask Another Question", value: "ask another" },
            ]);
            return "We recommend Nike Pegasus or Vaporfly for running. Would you like to see the collection?";
        } else if (message.includes("bye")) {
            setOptions([]);
            return "Goodbye! Have a great day shopping with Nike!";
        } else {
            setOptions([]);
            return "I'm sorry, I didn't understand that. Can you ask something else?";
        }
    };

    const handleSendMessage = (message) => {
        const userMessage = { role: "user", content: message };
        setMessages((prev) => [...prev, userMessage]);

        // Add bot response after a short delay
        setTimeout(() => {
            const botResponse = { role: "bot", content: generateBotResponse(message) };
            setMessages((prev) => [...prev, botResponse]);
        }, 500);
    };

    const toggleChatbot = () => {
        setIsVisible(!isVisible);
    };

    // Handle button click for selective inputs
    const handleOptionClick = (value) => {
        handleSendMessage(value); // Send the selected option as a message
    };

    return (
        <div>
            <button
                onClick={toggleChatbot}
                className="fixed bottom-5 right-5 bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl shadow-lg z-50"
            >
                {isVisible ? "×" : "Chat"}
            </button>

            {isVisible && (
                <div className="fixed bottom-20 right-5 w-96 h-max border-2 border-blue-500 rounded-xl shadow-lg bg-white bg-opacity-90 z-40">
                    <div className="flex-1 overflow-y-auto p-4">
                        {messages.map((msg, index) => (
                            <p
                                key={index}
                                className={`${
                                    msg.role === "user" ? "text-blue-600 text-right font-bold" : "text-green-600 text-left font-bold"
                                } my-2`}
                            >
                                {msg.content}
                            </p>
                        ))}
                    </div>
                    <div className="p-2">
                        {options.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {options.map((option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleOptionClick(option.value)}
                                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                                    >
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                    <ChatInput onSendMessage={handleSendMessage} />
                </div>
            )}
        </div>
    );
};

export default Chatbot;
