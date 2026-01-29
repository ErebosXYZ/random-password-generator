import React from "react"

type DisplayProps = {
    password: string;
}
export default function PasswordDisplay({ password }: DisplayProps) {
    return (
        <input type="text" readOnly value={password}/>)
}