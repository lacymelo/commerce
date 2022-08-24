import '../styles/button.scss'
import { ButtonHTMLAttributes } from "react"

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    name: string;
}

function Button({ name, ...rest }: IButton) {
    return (
        <button {...rest}>
            {name}
        </button>
    )
}

export { Button }