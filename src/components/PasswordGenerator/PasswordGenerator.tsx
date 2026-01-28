import React from "react";
import LengthInput from "../LengthInput/LengthInput";

function PasswordGenerator() {
    return(
        <section>
        <h1>Random Password Generator</h1>
        <LengthInput/>
        {/* Opcional: crear checkboxes de complexitat: Uppercase, lowercase, numbers, special characters */}
        <button>Generate Password</button>
        <input readOnly></input>
    </section>
    )
}

export default PasswordGenerator;