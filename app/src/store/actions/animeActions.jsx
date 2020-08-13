import axios from 'axios'

export const FETCHING_ANIME_DATA = "FETCHING_ANIME_DATA"
export const FETCH_SUCCESS = "FETCH_SUCCESS"

export const fetchAnime = () => (dispatch) => {
    dispatch({ type: FETCHING_ANIME_DATA })
    
    axios.get('https://api.jikan.moe/v3/search/anime?q=naruto%20shippuden')
    .then((res) => {
        console.log(res.data.results, 'movies/episodes')
        dispatch({ type: FETCH_SUCCESS, payload: res.data.results})
    })
    .catch(err => {console.log(err)})

}



const thunk = (store) => (next) => (action) => {
    if(typeof action === 'object') {
        next(action);
    } else if (typeof action === 'function') {
        action(store.dispatch)
    }
}