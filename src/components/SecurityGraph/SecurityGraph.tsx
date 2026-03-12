import React from "react";
import styles from "./SecurityGraph.module.css";
import { getStrengthColor } from "../../hooks/usePasswordStrength";

type DisplayProps = {
// Una prop que indiqui el color i el % de la barra segons l'estat de options
    strength: number;
    generatedPassword: string | null;
}

export default function SecurityGraph({ strength, generatedPassword }: DisplayProps) {
    if (!generatedPassword) {
        return null;
    }
    const color = getStrengthColor(strength);
    return (
        <div className={styles.container}>
            <div className={`${styles.bar} ${styles[color]}`}style={{width: `${strength}%`}}></div>
        </div>
    )
}