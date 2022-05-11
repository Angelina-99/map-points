import { useState } from 'react';
import { Marker } from 'react-leaflet';
import { useAppDispatch } from '../../store/hooks';
import { PointInterface, removePoint } from '../../store/MapSlice';
import Map from '../Map';
import styles from './PointCard.module.css';

function PointCard(props: PointInterface) {
    const { name, description, coords } = props;
    const dispatch = useAppDispatch();
    const [showPoint, setShowPoint] = useState(false);

    return (
        <div className={styles.pointCard}>
            <div className={styles.pointCardTitle}>{name}</div>
            <div className={styles.pointCardContent}>
                <div className={styles.pointCardDescription}>{description}</div>
                <div className={styles.pointCardCoords}>
                    <div className={styles.pointCardCoord}>
                        x: {coords[0]}
                    </div>
                    <div className={styles.pointCardCoord}>
                        y: {coords[1]}
                    </div>
                </div>
                {showPoint && (
                    <div className={styles.pointCardMapContainer}>
                        <Map center={coords}>
                            <Marker position={coords} />
                        </Map>
                    </div>
                )}
            </div>
            <div className={styles.pointCardActions}>
                <button
                    className={styles.btnRed}
                    onClick={() => dispatch(removePoint(coords))}
                >Удалить</button>
                {!showPoint ? (
                    <button
                        className={styles.btn}
                        onClick={() => {setShowPoint(true)}}
                    >
                        Показать
                    </button>
                ) : (
                    <button
                        className={styles.btn}
                        onClick={() => {setShowPoint(false)}}
                    >
                        Скрыть
                    </button>
                )}
            </div>
        </div>
    )
}

export default PointCard;