import '../styles/shop-details.scss'
import { AiFillClockCircle, AiFillInfoCircle, AiOutlineArrowLeft } from "react-icons/ai"
import { Container } from "../components/Container"
import { Header } from "../components/Header"
import store from "../assets/store.jpg"
import oneStore from "../assets/cyber-monday-removebg-preview.png"
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import mapIcon from '../utils/mapIcon'
import { useState } from 'react'
import { Button } from '../components/Button'

function ShopDetails() {
    const [position, setPosition] = useState<[number, number]>([-2.246658, -49.504908])
    const [openOnWeekends, setOpenOnWeekends] = useState(false)

    return (
        <main>
            <div className="shop-details">
                <Header
                    path='/shops-map'
                    icon={<AiOutlineArrowLeft className='icon' />}
                />

                <Container>
                    <div className="details">
                        <div className="image-container">
                            <img src={store} alt="main-image" />
                        </div>

                        <div className="images">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-4 col-md-4 col-sm-6">
                                        <button className="button active">
                                            <img src={store} alt="one-store" />
                                        </button>
                                    </div>
                                    <div className="col-4 col-md-4 col-sm-6">
                                        <button className="button">
                                            <img src={store} alt="one-store" />
                                        </button>
                                    </div>
                                    <div className="col-4 col-md-4 col-sm-6">
                                        <button className="button">
                                            <img src={store} alt="one-store" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="details-content">
                            <h2>Mercadinho Fé em Deus</h2>
                            <p>Venha nos fazer uma visita, estamos prontos a te atender.</p>

                            <div className="map-container">
                                <MapContainer
                                    center={position}
                                    zoom={16}
                                    style={{ width: '100%', height: 280 }}
                                >
                                    <TileLayer
                                        // url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker interactive={false} icon={mapIcon} position={position} />
                                </MapContainer>

                                <footer>
                                    <a href={`https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`} target='_blank' rel="noopener noreferrer">Ver rotas no Google Maps</a>
                                </footer>
                            </div>
                            <h2>Horário Comercial</h2>

                            <div className="open-details">
                                <div className="hour">
                                    <AiFillClockCircle size={32} className='icon' />

                                    <div className="info">
                                        Segunda à Sexta <br />
                                        das 8:00h às 20:00h
                                    </div>
                                </div>

                                {
                                    openOnWeekends ?
                                        <div className="open-on-weekends">
                                            <AiFillInfoCircle size={32} className='icon' />

                                            <div className="info">
                                                Atendemos
                                                fim de semana
                                            </div>
                                        </div>
                                        :
                                        <div className="open-on-weekends dot-open">
                                            <AiFillInfoCircle size={32} className='icon' />

                                            <div className="info">
                                                Não atendemos
                                                fim de semana
                                            </div>
                                        </div>
                                }
                            </div>

                            <div className="button-container">
                                <Button
                                    type='button'
                                    className='button'
                                    name='Entrar em contato'
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </main>
    )
}

export { ShopDetails }