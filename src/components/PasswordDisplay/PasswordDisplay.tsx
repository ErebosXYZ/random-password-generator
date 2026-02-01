import React from "react";
import styles from "./PasswordDisplay.module.css";

type DisplayProps = {
    password: string;
}
export default function PasswordDisplay({ password }: DisplayProps): React.ReactElement {
    return (
        <input type="text" readOnly value={password} className={styles.passwordDisplay} />
    );
}