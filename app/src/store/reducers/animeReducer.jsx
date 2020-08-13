import { FETCHING_ANIME_DATA, FETCH_SUCCESS } from '../actions/animeActions'

const initialState = {
    data: [],
    imageURL: '',
    title: '',
    synopsis: '',
    isLoading: false,
    error: '',
};

export const animeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_ANIME_DATA: 
        return {
            ...state,
            isLoading: true,
            error: ''
        };
        case FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        default:
            return state;
    }
}