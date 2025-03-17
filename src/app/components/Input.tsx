import { useState } from "react";

interface InputProps {
    label: string;
    type?: string;
    name: string;
    placeholder: string;
}

export default function Input({ label, type = "text", name, placeholder }: InputProps) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col w-full">
            <label className="text-sm font-medium text-gray-300">{label}</label>
            <div className="relative">
                <input
                    type={type === "password" && !showPassword ? "password" : "text"}
                    name={name}
                    placeholder={placeholder}
                    className="w-full p-2 mt-1 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {type === "password" && (
                    <button
                        type="button"
                        className="absolute right-2 top-2 text-gray-400"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? "🙈" : "👁️"}
                    </button>
                )}
            </div>
        </div>
    );
}
