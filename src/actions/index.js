import { GET_MOVIES,GET_MOVE } from './actionType'
import request from './request'

export const getMovies = () => {
    return async dispatch => {
        const result = await request({
            url: '/ajax/movieOnInfoList',
            params: {
                token: ''
            }
        })

        dispatch({
            type: GET_MOVIES,
            payload: result.data
        })
    }
}

export const getMove = ids => {
    return async dispatch => {
        const result = await request({
            url: '/ajax/moreComingList',
            params: {
                token: '',
                movieIds: ids
            }
        })

        dispatch({
            type: GET_MOVE,
            payload: result.data
        })
    }
}