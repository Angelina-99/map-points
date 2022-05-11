import PointCard from "../components/PointCard";
import { useAppSelector } from "../store/hooks";
import { selectPoints } from "../store/MapSlice";
import styles from '../styles/PointsList.module.css';

function PointsList() {
    const mapPoints = useAppSelector(selectPoints);

    return (
        <div className={styles.contentContainer}>
            {mapPoints.map(point => (
                <PointCard
                    key={`x${point.coords[0]}, y${point.coords[1]}`}
                    name={point.name}
                    description={point.description}
                    coords={point.coords}
                />
            ))}
        </div>
    )
}

export default PointsList;