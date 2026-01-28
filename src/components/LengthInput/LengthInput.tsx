import React from "react";
import { useState } from "react";



export default function LengthInput() {
    const [length, setLength] = useState(12);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLength(Number(e.target.value))
    };

    return (
        <div>
            <label>Password Length: </label>
            <input type="number"
            value={length}
            onChange={handleChange}
            ></input>
        </div>
    );
};

