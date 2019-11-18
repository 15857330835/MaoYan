import { GET_MOVIES,GET_MOVE } from '../actions/actionType'

const initState = {
    movies: null
}

const homeReducer = ( state=initState,action ) => {
    const newState = { ...state }

    switch (action.type) {
        case GET_MOVIES:
            newState.movies = action.payload
            break;
        case GET_MOVE:
            newState.movies.movieList.push( ...action.payload.coming )
            break;
    
        default:
            break;
    }

    return newState
}

export default homeReducer