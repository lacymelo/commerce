import { Marker, useMapEvents } from 'react-leaflet';
import MapIcon from '../utils/mapIcon';


interface IMarkersProps {
    selectedPosition: (number: [number, number]) => void;
    position: [number, number];
}

function Markers({ selectedPosition, position }: IMarkersProps) {
    useMapEvents({
        click(e) {
            //recupera a latitude e longitude do ponto definido pelo usuário no mapa
            selectedPosition([
                e.latlng.lat,
                e.latlng.lng
            ]);
        },
    })

    return position ? (
        <Marker
            position={position}
            interactive={false}
            icon={MapIcon}
        />
    ) : <p>Carregando mapa...</p>
}

export { Markers } 