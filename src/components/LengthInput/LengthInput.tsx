import React from "react";
import styles from "./LengthInput.module.css";

type LengthInputProps= {
    length: number;
    onLengthChange: (value: number) => void;
}


export default function LengthInput({ length, onLengthChange }: LengthInputProps): React.ReactElement {
    // Use state guarda el valor de l'input de manera reactiva. I handlechange actualitza el valor de l'input cada cop que l'usuari el canvia.
   
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onLengthChange(Number(e.target.value))
    };

    return (
        <div>
            <label className={styles.label}>Password Length: </label>
            <input type="number"
            value={length}
            onChange={handleChange} className={styles.input}
            />
        </div>
    );
};

