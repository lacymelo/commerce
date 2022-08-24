import '../styles/shop-details.scss'
import { AiFillClockCircle, AiFillInfoCircle, AiOutlineArrowLeft } from "react-icons/ai"
import { Container } from "../components/Container"
import { Header } from "../components/Header"
import store from "../assets/store-attendance.png"
import oneStore from "../assets/cyber-monday-removebg-preview.png"
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import mapIcon from '../utils/mapIcon'
import { useState } from 'react'

function ShopDetails() {
    const [position, setPosition] = useState<[number, number]>([-2.246658, -49.504908])
    const [openOnWeekends, setOpenOnWeekends] = useState(false)

    return (
        <main>
            <Header
                path='/shops-map'
                icon={<AiOutlineArrowLeft className='icon' />}
            />

            <Container>
                <div className="col-12 col-md-12">
                    <div className="shop-details">
                        <div className="details">
                            <img src={store} alt="main-image" />

                            <div className="images">
                                <button className="button">
                                    <img src={oneStore} alt="one-store" />
                                </button>
                                <button className="button">
                                    <img src={oneStore} alt="one-store" />
                                </button>
                            </div>

                            <div className="details-content">
                                <h1>Mercadinho Fé em Deus</h1>
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

                                <hr />

                                <h2>Horário Comercial</h2>

                                <div className="open-details">
                                    <div className="hour">
                                        <AiFillClockCircle size={32} color="#15B6D6" />
                                        Segunda à Sexta <br />
                                        das 8:00h às 20:00h
                                    </div>

                                    {
                                        openOnWeekends ?
                                            <div className="open-on-weekends">
                                                <AiFillInfoCircle size={32} color="#39CC83" />
                                                Atendemos <br />
                                                fim de semana
                                            </div>
                                            :
                                            <div className="open-on-weekends dont-open">
                                                <AiFillInfoCircle size={32} color="#FF669D" />
                                                Não atendemos <br />
                                                fim de semana
                                            </div>
                                    }

                                </div>

                                <div className="button-container">

                                    <button type='submit' className="button">
                                        Entrar em contato
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </main>
    )
}

export { ShopDetails }