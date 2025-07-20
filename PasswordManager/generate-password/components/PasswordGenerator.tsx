"use client";
import React, { useState } from 'react'

const PasswordGenerator = () => {
    const [password, setPassowrd] = useState('');
    const [length, setLength] = useState(12);
    const [includeLetters, setIncludeLetters] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);

    const generatePassword = () => {
        let characters = '';
        if (includeLetters) {
            characters += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }
        if (includeNumbers) {
            characters += '0123456789';
        }
        if (includeSymbols) {
            characters += '!@#$%^&*()_+[]{}|;:,.<>?';
        }
        if (characters.length === 0) return;
        let newPassword = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            newPassword += characters[randomIndex];
        }
        setPassowrd(newPassword);
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full p-6 border rounded-md shadow-md bg-white">
                <h2 className="text-2xl font-semibold mb-4 text-center">Password Generator App</h2>

                <input
                    type="text"
                    className="border-2 border-gray-300 rounded-md p-2 w-full mb-4"
                    readOnly
                    placeholder="Generated Password"
                    value={password}
                />

                <label className="block mb-2">Password Length: {length}</label>
                <input
                    type="range"
                    min={4}
                    max={32}
                    className="w-full mb-4"
                    value={length}
                    onChange={(e) => setLength(Number(e.target.value))}
                />

                <div className="mb-4">
                    <label className="flex items-center space-x-2 mb-2">
                        <input type="checkbox" checked={includeLetters} onChange={(e) => setIncludeLetters(e.target.checked)} />
                        <span>Include Letters (a-z, A-Z)</span>
                    </label>
                    <label className="flex items-center space-x-2 mb-2">
                        <input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} />
                        <span>Include Numbers (0-9)</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} />
                        <span>Include Special Characters (!@#$...)</span>
                    </label>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600" onClick={generatePassword}>
                    Generate Password
                </button>
            </div>
        </div>
    );
};

export default PasswordGenerator;