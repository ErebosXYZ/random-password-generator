import React from "react";
import { useState } from "react";
import LengthInput from "../LengthInput/LengthInput";
import PasswordDisplay from "../PasswordDisplay/PasswordDisplay";
import GenerateButton from "../GenerateButton/GenerateButton";
import OptionsCheckbox from "../OptionsCheckbox/OptionsCheckbox";
import SecurityGraph from "../SecurityGraph/SecurityGraph";
import { calculateStrength } from "../../hooks/usePasswordStrength";

type GeneratorOptions = {
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  specialCharacters: boolean;
};

function PasswordGenerator() {
  const [length, setLength] = useState(10);
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState<number>(0);
  const [options, setOptions] = useState<GeneratorOptions>({
    uppercase: false,
    lowercase: false,
    numbers: false,
    specialCharacters: false,
  });

  const generatePassword = (passwordLength: number = length) => {
    // 4 charsets que hem de mapejar amb opcions. Si la opció corresponent és true, el charset entra en joc.
    const charSets: Record<string, string> = {
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      numbers: "0123456789",
      specialCharacters: "!@#$%^&*"
    };
    // Strings buides que contindran llista de caràcters disponibles i el resultat final
    let availableChars = "";
    let result = "";
    // Com que les object keys de charsets i opcions són iguals, recorrem options, que controla l'estat (per defecte false) i si el checkbox està marcat (true) afegim el valor de la mateixa key de charSets
    for (const o of Object.keys(options) as Array<keyof GeneratorOptions>) {
      if (options[o]) {
        availableChars += charSets[o];
      }
    }
    // Si no es marca cap checkbox, és a dir l'estat és false en tots els casos, afegim tots els valors del diccionari de caràcters a availableChars
    if (availableChars === "") {
      availableChars = Object.values(charSets).join('');
    }
    // Recorrem els caràcters disponibles tantes vegadees com indiqui l'estat de passWordLength i en cada iteració n'agafem un index aleatori i l'afegim a la string de result.
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * availableChars.length);
      result += availableChars[randomIndex];
    }
    setPassword(result);

    const strengthScore = calculateStrength(passwordLength, options);
    setStrength(strengthScore);
    

  }
  return (
    <section className="container">
      <h1>Random Password Generator</h1>
      <LengthInput length={length} onLengthChange={setLength} />
      <OptionsCheckbox options={options} onChange={setOptions} />
      <GenerateButton onClick={() => generatePassword(length)} label="Generate Password" />
      <PasswordDisplay password={password} />
      <SecurityGraph strength={strength} generatedPassword={password}/>
    </section>
  )
}

export default PasswordGenerator;