{/* Opcional: crear checkboxes de complexitat: Uppercase, lowercase, numbers, special characters 
    
    */}
import React from "react";
import type { PasswordOptions } from "../../types/password";
import styles from "../OptionsCheckbox/OptionsCheckbox.module.css"

// Crear un objecte amb les opcions i un altre amb les props
type OptionsCheckboxProps = {
    options: PasswordOptions;
    onChange: (options: PasswordOptions) 
    => void;
}

export default function OptionsCheckbox({ options, onChange,  }: OptionsCheckboxProps ): React.ReactElement {
    const handleChange = (key: keyof PasswordOptions) => {
        onChange({
            ...options,
            [key]: !options[key],
        });
    };
    return(
        <div className={styles.OptionsCheckbox}>
            {/*L'usuari pot afegir aquestes opcions. Si no, és completament aleatori com ara.
            Cada input envia una prop al passwordgenerator i en modifica la lògica */}
            <label><input type="checkbox" checked={options.uppercase} onChange={() => handleChange("uppercase")}/> Uppercase</label>
            <label><input type="checkbox" checked={options.lowercase} onChange={() => handleChange("lowercase")}/> Lowercase</label>
            <label><input type="checkbox" checked={options.numbers} onChange={() => handleChange("numbers")}/> Numbers</label>
            <label><input type="checkbox" checked={options.specialCharacters} onChange={() => handleChange("specialCharacters")}/> Special characters</label>
        </div>
    )
}