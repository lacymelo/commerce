import '../styles/container.scss'

interface IContainer {
    children: JSX.Element;
}

function Container({ children }: IContainer) {
    return (
        <div className="container">
            <div className="col-12">
                <div className="row">
                    {children}
                </div>
            </div>
        </div>
    )
}

export { Container }