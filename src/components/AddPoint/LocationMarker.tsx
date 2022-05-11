import { Marker, useMapEvents } from "react-leaflet"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { selectNewPointCoords, setNewPointCoords } from "../../store/MapSlice"

function LocationMarker() {
    const position = useAppSelector(selectNewPointCoords);
    const dispatch = useAppDispatch();

    const map = useMapEvents({
      click(e) {
        dispatch(setNewPointCoords([e.latlng.lat, e.latlng.lng]));
      },
    })
  
    return position === null ? null : (
      <Marker position={position} />
    )
  }

export default LocationMarker;