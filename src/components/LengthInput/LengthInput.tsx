import React from "react";

type LengthInputProps= {
    length: number;
    onLengthChange: (value: number) => void;
}


export default function LengthInput({ length, onLengthChange }: LengthInputProps) {
    // Use state guarda el valor de l'input de manera reactiva. I handlechange actualitza el valor de l'input cada cop que l'usuari el canvia.
   
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onLengthChange(Number(e.target.value))
    };

    return (
        <div>
            <label>Password Length: </label>
            <input type="number"
            value={length}
            onChange={handleChange}
            />
        </div>
    );
};

