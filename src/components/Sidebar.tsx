import '../styles/sidebar.scss'
import { IconButton } from "./IconButton"
import logo from "../assets/map-marker.svg"

interface ISidebar {
    icon: JSX.Element;
}

function Sidebar({ icon }: ISidebar) {
    return (
        <div className="sidebar-container">
            <aside className="sidebar">
                <div className="logo-sidebar">
                    <img src={logo} alt="logo" />
                </div>

                <IconButton
                    path="/"
                    title="Voltar"
                    className="button-link"
                    icon={icon}
                />
            </aside>
        </div>
    )
}

export { Sidebar }