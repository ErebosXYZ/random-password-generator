import React from "react";
import styles from "./GenerateButton.module.css"

type ButtonProps = {
    onClick: () => void;
    label: string;
}

export default function GenerateButton({ onClick, label }: ButtonProps) {
    return(
        <button onClick={onClick} className={styles.button}>{label}</button>
    )
}