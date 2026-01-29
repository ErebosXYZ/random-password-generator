import React from "react";
import { useState } from "react";
import LengthInput from "../LengthInput/LengthInput";
import PasswordDisplay from "../PasswordDisplay/PasswordDisplay";
import GenerateButton from "../GenerateButton/GenerateButton";

function PasswordGenerator() {
     const [length, setLength ] = useState(10);
     const [password, setPassword ] = useState("");
     const generatePassword = (passwordLength: number = length ) => {
       const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
       let result = "";

       for (let i = 0; i < passwordLength; i++ ) {
        result += chars.charAt(Math.floor(Math.random() * chars.length))
       }

       setPassword(result)

     }
    return(
        <section>
        <h1>Random Password Generator</h1>
        <LengthInput length={length} onLengthChange={setLength}/>
        {/* Opcional: crear checkboxes de complexitat: Uppercase, lowercase, numbers, special characters */}
        <GenerateButton onClick={() => generatePassword(length)} label="Generate Password"/>
        <PasswordDisplay password={password}/>
    </section>
    )
}

export default PasswordGenerator;