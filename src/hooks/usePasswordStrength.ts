import type { PasswordOptions } from '../types/password';
function calculateStrength(passwordLength: number, options: PasswordOptions) {
    let enabledOptionsCount = Object.values(options).filter(Boolean).length;

    const defaultOptions = 4;

    if (enabledOptionsCount === 0) {
        enabledOptionsCount = defaultOptions;
    }
    const lengthScore = (passwordLength / 20) * 50;

    const optionsScore = (enabledOptionsCount / 4) * 50;

    const totalScore = lengthScore + optionsScore;

    const finalScore = Math.min(Math.round(totalScore), 100);
    
    return finalScore;
}

function getStrengthColor(strength: number): string {
    if (strength <= 20) {
        return "red";
    } else if (strength <= 40) {
        return "orange";
    } else if (strength <= 70) {
        return "yellow-green";
    } else {
        return "dark-green";
    }
}

function usePasswordStrength() {
    return { calculateStrength, getStrengthColor }
}

export { calculateStrength, getStrengthColor, usePasswordStrength };
export default usePasswordStrength;