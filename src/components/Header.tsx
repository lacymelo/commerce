import { IconButton } from "./IconButton"
import '../styles/header.scss'
import logo from '../assets/map-marker.svg'

interface IHeader {
    path: string;
    icon: JSX.Element;
}

function Header({ path, icon }: IHeader) {
    return (
        <div className="header-container">
            <header className="header">
                <IconButton
                    className='button-link'
                    path={path}
                    title='Voltar'
                    icon={icon}
                />

                <div className="logo-sidebar">
                    <img src={logo} alt="logo" />
                </div>
            </header>
        </div>
    )
}

export { Header }