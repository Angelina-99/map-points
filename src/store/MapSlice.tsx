import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { RootState } from '.';

export interface PointInterface {
    name: string,
    description: string,
    coords: [number, number],
}

export interface MapState {
    points: PointInterface[],
    newPoint: PointInterface,
}

export const initialState: MapState = {
    points: [],
    newPoint: {
        name: '',
        description: '',
        coords: [0, 0],
    }
};

const mapSlice = createSlice({
    name: 'Map',
    initialState,
    reducers: {
        setNewPointName(state, action: PayloadAction<string>) {
            state.newPoint.name = action.payload;
        },
        setNewPointDescription(state, action: PayloadAction<string>) {
            state.newPoint.description = action.payload;
        },
        setNewPointCoords(state, action: PayloadAction<[number, number]>) {
            state.newPoint.coords = action.payload;
        },
        addPoint(state) {
            if (state.newPoint.name === '') {
                toast.error('Необходимо название для точки');
                return;
            }
            if (state.newPoint.description === '') {
                toast.error('Необходимо описание для точки');
                return;
            }
            if (state.points.some(point => point.coords[0] === state.newPoint.coords[0] && point.coords[1] === state.newPoint.coords[1])) {
                toast.error('Точка с такими координатами уже есть');
            } else {
                state.points.push(state.newPoint);
                state.newPoint = {
                    name: '',
                    description: '',
                    coords: [0, 0],
                }
                toast.success('Точка успешно добавлена');
            }
        },
        removePoint(state, action: PayloadAction<[number, number]>) {
            const newPoints = state.points.filter(point => point.coords[0] !== action.payload[0] && point.coords[1] !== action.payload[1]);
            if (newPoints.length !== state.points.length) {
                state.points = newPoints;
                toast.success('Точка успешно удалена');
            } else {
                toast.error('Не удалось удалить точку');
            }
        },
    },
});

export default mapSlice.reducer;

export const {
    setNewPointName,
    setNewPointDescription,
    setNewPointCoords,
    addPoint,
    removePoint,
} = mapSlice.actions;

export const selectNewPoint = (state: RootState) => state.Map.newPoint;
export const selectNewPointCoords = (state: RootState) => state.Map.newPoint.coords;
export const selectPoints = (state: RootState) => state.Map.points;
