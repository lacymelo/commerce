import '../styles/landing.scss'
import logo from '../assets/map-marker.svg'
import attendance from '../assets/landing.svg'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'

function Landing() {
    return (
        <main>
            <section className="landing">
                <div className="container">
                    <header className="landing-header">
                        <div className="logo-container">
                            <div className="logo">
                                <img src={logo} alt="logo" />
                            </div>

                            <h1>Commerce</h1>
                        </div>

                        <div className="location-info">
                            <h3 className="city">
                                Cametá
                            </h3>

                            <p className="uf">PA</p>
                        </div>
                    </header>

                    <div className="banner">
                        <div className="left">
                            <h1>Encontre suas lojas favoritas</h1>
                            <p>Contribua com o cadastro de lojas da sua região </p>
                        </div>

                        <div className="right">
                            <div className="image-container">
                                <img src={attendance} alt="imagem-banner" />
                            </div>

                            <Link to="/" title='Entrar'>
                                <AiOutlineArrowRight className='icon' />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export { Landing }