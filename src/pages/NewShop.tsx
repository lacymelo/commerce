import '../styles/new-shop.scss'
import { AiOutlineArrowLeft, AiOutlineClose, AiOutlinePlus } from 'react-icons/ai'
import { ChangeEvent, useLayoutEffect, useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { Markers } from '../components/Markers'
import { Header } from '../components/Header'
import { Container } from '../components/Container'
import { Input } from '../components/Input'
import { Button } from '../components/Button'

function NewShop() {
    const [name, setName] = useState('')
    const [about, setAbout] = useState('')
    const [openingHours, setOpeningHours] = useState('')
    const [openOnWeekends, setOpenOnWeekends] = useState(true)
    const [images, setImages] = useState<File[]>([]);
    const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0])
    const [selectedPosition, setSelectedPosition] = useState<[number, number]>([0, 0])
    const [previewImages, setPreviewImages] = useState<string[]>([])

    useLayoutEffect(() => {
        async function loadPosition() {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords

                setInitialPosition([latitude, longitude])
            });
        }

        loadPosition();
    }, []);

    function handleSelectedImage(event: ChangeEvent<HTMLInputElement>) {
        if (!event.target.files) {
            return;
        }

        const selectedImages = Array.from(event.target.files);

        selectedImages.map(image => {
            setImages([...images, image]);
            setPreviewImages([...previewImages, URL.createObjectURL(image)]);
        })
    }

    function removeImage(position: number) {
        if (position !== -1) {
            const arrayPreview = previewImages.filter((item, index) => {
                return position !== index
            });

            const arrayImages = images.filter((item, index) => {
                return position !== index
            });

            setPreviewImages(arrayPreview);
            setImages(arrayImages);
        }
    }

    async function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault()

        // const dataForm = new FormData()
        // dataForm.append('name', name)
        // dataForm.append('about', about)
        // dataForm.append('opening_hours', openingHours)
        // dataForm.append('open_on_weekends', String(openOnWeekends))
        // dataForm.append('latitude', String(selectedPosition[0]))
        // dataForm.append('longitude', String(selectedPosition[1]))

        // images.forEach(image => {
        //     dataForm.append('images', image)
        // })

        let obj = {
            name,
            about,
            openingHours,
            openOnWeekends,
            'latitude': selectedPosition[0],
            'longitude': selectedPosition[1],
            images

        }

        // console.log(dataForm)
        console.log(obj)
    }



    return (
        <main>
            <div className="new-shop">
                <Header
                    path='/shops-map'
                    icon={<AiOutlineArrowLeft className='icon' />}
                />

                <Container>
                    <div className="col-12">
                        <form onSubmit={handleSubmit} className='form'>
                            <div className="row">
                                <div className="col-12">
                                    <fieldset>
                                        <legend>Dados</legend>

                                        {
                                            initialPosition[0] && (
                                                <MapContainer
                                                    center={initialPosition}
                                                    zoom={17}
                                                    scrollWheelZoom={false}
                                                    style={{ width: '100%', height: 280 }}>

                                                    <TileLayer
                                                        // url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                                    />

                                                    {selectedPosition && (
                                                        <Markers position={selectedPosition}
                                                            selectedPosition={setSelectedPosition}
                                                        />
                                                    )}

                                                </MapContainer>
                                            )
                                        }

                                        <Input
                                            type="text"
                                            label="Nome"
                                            id='name'
                                            value={name}
                                            onChange={(event) => setName(event.target.value)}
                                        />

                                        <div className="textarea-block">
                                            <label htmlFor="about">
                                                Sobre
                                                <span>Máximo de 300 caracteres</span>
                                            </label>

                                            <textarea
                                                id='about'
                                                maxLength={300}
                                                value={about}
                                                onChange={(event) => setAbout(event.target.value)}
                                            />
                                        </div>

                                        <div className="input-block">
                                            <label htmlFor="images">Fotos</label>

                                            <div className="upload-content">
                                                <div className="col-12">
                                                    <div className="row">

                                                        {
                                                            previewImages.map((image, index) => (
                                                                <div className="col-4 col-md-4 col-sm-6 sm">
                                                                    <div className="box-image" key={index}>
                                                                        <AiOutlineClose size={27} className="close" onClick={() => removeImage(index)} />
                                                                        <img src={image} alt="images" />
                                                                    </div>
                                                                </div>
                                                            ))
                                                        }

                                                        <div className="col-4 col-md-4 col-sm-6 sm">
                                                            <div className="btn">
                                                                <label htmlFor="image[]" className="new-image">
                                                                    <AiOutlinePlus size={24} className="icon" />
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <input multiple onChange={(e) => handleSelectedImage(e)} type="file" id="image[]" />
                                        </div>
                                    </fieldset>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <fieldset>
                                        <legend>Horário Comercial</legend>

                                        <Input
                                            type="text"
                                            label="Horário de Funciomaneto"
                                            id='opening_hours'
                                            value={openingHours}
                                            onChange={(event) => setOpeningHours(event.target.value)}
                                        />

                                        <div className="grid-block-buttons">
                                            <label htmlFor="open_on_weekends">Atende fim de semana</label>

                                            <div className="two-blocks">
                                                <button
                                                    type="button"
                                                    className={openOnWeekends ? 'category category-selected' : 'category'}
                                                    onClick={() => setOpenOnWeekends(true)}
                                                >
                                                    Sim
                                                </button>

                                                <button
                                                    type="button"
                                                    className={openOnWeekends ? 'category' : 'category category-selected'}
                                                    onClick={() => setOpenOnWeekends(false)}
                                                >
                                                    Não
                                                </button>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <fieldset>
                                        <Button
                                            type='submit'
                                            className='button'
                                            name='Salvar'
                                        />
                                    </fieldset>
                                </div>
                            </div>
                        </form>
                    </div>
                </Container>
            </div>
        </main>
    )
}

export { NewShop }