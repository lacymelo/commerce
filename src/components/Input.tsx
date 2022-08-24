import '../styles/input.scss'
import { HTMLAttributes, InputHTMLAttributes } from "react";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
}

function Input({ label, id, ...rest }: IInput) {
    return (
        <div className="input-block">
            <label htmlFor={id}>{label}</label>

            <input
                {...rest}
            />
        </div>
    )
}

export { Input }