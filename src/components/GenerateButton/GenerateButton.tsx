import React from "react";

type ButtonProps = {
    onClick: () => void;
    label: string;
}

export default function GenerateButton({ onClick, label }: ButtonProps) {
    return(
        <button onClick={onClick} >{label}</button>
    )
}