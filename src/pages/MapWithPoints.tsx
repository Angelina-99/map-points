import { Marker, Popup } from "react-leaflet";
import Map from "../components/Map";
import { useAppSelector } from "../store/hooks";
import { selectPoints } from "../store/MapSlice";
import styles from '../styles/MapWithPoints.module.css';

function MapWithPoints() {
    const mapPoints = useAppSelector(selectPoints);

    return (
        <div className={styles.contentContainer}>
            <Map>
                {mapPoints.map(point => (
                    <Marker key={`x${point.coords[0]}, y${point.coords[1]}`} position={point.coords}>
                        <Popup>
                            <div className={styles.pointName}>{point.name}</div>
                            <div className={styles.pointDescription}>{point.description}</div>
                        </Popup>
                    </Marker>
                ))}
            </Map>
        </div>
    )
}

export default MapWithPoints;