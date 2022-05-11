import { LatLngExpression } from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet'
import styles from './Map.module.css';

export interface MapInterface {
    children: JSX.Element | Array<JSX.Element> | null,
    center?: LatLngExpression,
}

function Map(props: MapInterface) {
    const { children, center } = props;
    const position: LatLngExpression = [59.91174337077401, 10.750425582038146];
    const zoom: number = 15;
    
    return (
        <MapContainer className={styles.mapContaier} center={center? center : position} zoom={zoom} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {children}
        </MapContainer>
    )
}

export default Map;