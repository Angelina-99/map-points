import LocationMarker from './LocationMarker';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import styles from './AddPoint.module.css';
import Map from '../Map';
import {
    addPoint,
    selectNewPoint,
    setNewPointDescription,
    setNewPointName,
} from '../../store/MapSlice';

function AddPoint() {
    const newPoint = useAppSelector(selectNewPoint);
    const dispatch = useAppDispatch();

    const handleOnClick = () => {
        dispatch(addPoint());
    }

    return (
        <div className={styles.container}>
            <div className={styles.inputContainer}>
                <div className={styles.inputTitle}>Название</div>
                <input
                    type='text'
                    value={newPoint.name}
                    onChange={(e) => dispatch(setNewPointName(e.target.value))}
                />
            </div>
            <div className={styles.inputContainer}>
                <div className={styles.inputTitle}>Описание</div>
                <textarea
                    value={newPoint.description}
                    onChange={(e) => dispatch(setNewPointDescription(e.target.value))}
                />
            </div>
            <div className={styles.inputTitle}>Координаты</div>
            <div className={styles.coords}>
                {newPoint.coords.toString()}
            </div>
            <div className={styles.mapContainer}>
                <Map>
                    <LocationMarker />
                </Map>
            </div>
            <div className={styles.inputContainer}>
                <button className={styles.btn} onClick={handleOnClick}>Сохранить</button>
            </div>
        </div>
    )
}

export default AddPoint;