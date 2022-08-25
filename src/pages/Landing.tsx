import '../styles/landing.scss'
import { AiOutlineArrowRight } from 'react-icons/ai'
import logo from '../assets/logo.svg'
import attendance from '../assets/search-map.png'
import { IconButton } from '../components/IconButton'

function Landing() {
    return (
        <main>
            <section className="landing">
                <div className="container">
                    <header className="landing-header">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-6 col-md-6 col-sm-12">
                                    <div className="logo">
                                        <img src={logo} alt="logo" />
                                    </div>
                                </div>
                                <div className="col-6 col-md-6 col-sm-12">
                                    <div className="location-info">
                                        <h3 className="city">
                                            Cametá
                                        </h3>

                                        <p className="uf">PA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                    <div className="banner">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-6 col-md-6 col-sm-12">
                                    <div className="left">
                                        <h1>Encontre suas lojas favoritas</h1>
                                        <p>Contribua com o cadastro de lojas da sua região </p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-6 col-sm-12">
                                    <div className="right">
                                        <div className="image-container">
                                            <img src={attendance} alt="imagem-banner" />
                                        </div>

                                        <IconButton
                                            className='button-link'
                                            path='/shops-map'
                                            title='Entrar'
                                            icon={<AiOutlineArrowRight className='icon' />}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export { Landing }