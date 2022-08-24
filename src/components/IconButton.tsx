import '../styles/icon-button.scss'
import { HTMLAttributes } from "react";
import { Link } from "react-router-dom"

interface IIconButton extends HTMLAttributes<HTMLAnchorElement> {
    path: string;
    title: string;
    icon: JSX.Element;
}

function IconButton({ path, title, icon, ...rest }: IIconButton) {
    return (
        <Link to={path} title={title} {...rest}>
            {icon}
        </Link>
    )
}

export { IconButton }