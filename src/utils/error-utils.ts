import { Dispatch } from 'redux';
import { setAppErrorAC, SetAppErrorACType, setAppStatusAC, SetAppStatusACType } from '../redux/app-reducer';
import { ResponseType } from './../api/api';

export const handleServerAppError = <D>(data: ResponseType<D>, dispatch: Dispatch<SetAppErrorACType | SetAppStatusACType>) => {
    if (data.messages.length) {
        dispatch(setAppErrorAC(data.messages[0]))
    } else {
        dispatch(setAppErrorAC('Some error occurred'))
    }
    dispatch(setAppStatusAC('failed'))
}

export const handleServerNetworkError = (error: { message: string }, dispatch: Dispatch<SetAppErrorACType | SetAppStatusACType>) => {
    dispatch(setAppErrorAC(error.message ? error.message : 'Some error occurred'))
    dispatch(setAppStatusAC('failed'))
}
