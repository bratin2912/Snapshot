import axios from "axios";
import { useEffect, useReducer, React, useContext, createContext } from "react";
// import { useNavigate } from "react-router-dom";
import reducer from '../Context/Reducer'
const AppContext = createContext();

const initialState = {
    isLoading: true,
    query: '',
    data: []
}

const api = 'https://www.flickr.com/services/rest/?';
const method = 'flickr.photos.search';
const key = '69341463d32933570ec36f4737ace2ce';
const format = 'json&nojsoncallback=1';

const AppProvider = ({ children }) => {

    // const navigate=useNavigate();

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        ApiCall(`${api}&method=${method}&api_key=${key}&text=${state.query}&format=${format}`)
    }, [state.isLoading])

    const ApiCall = async (url) => {
        try {
            const photoData = await axios.get(url);
            dispatch({
                type: "GET",
                payload: {
                    photoData
                }
            })
        } catch (err) {
            console.log(err);
        }
    }

    const mountain = () => {
        // navigate('/mountain')
        dispatch({
            type: "CNGQUERY",
            payload: {
                query: "mountain"
            }
        })
    }
    const beaches = () => {
        // navigate('/beaches')
        dispatch({
            type: "CNGQUERY",
            payload: {
                query: "beaches"
            }
        })
    }
    const food = () => {
        // navigate('/food')
        dispatch({
            type: "CNGQUERY",
            payload: {
                query: "food"
            }
        })
    }
    const birds = () => {
        // navigate('/bird')
        dispatch({
            type: "CNGQUERY",
            payload: {
                query: "bird"
            }
        })
    }
    const others = (query) => {
        dispatch({
            type: "CNGQUERY",
            payload: {
                query: query
            }
        })
    }
    return <AppContext.Provider value={{ ...state, mountain, food, beaches, birds, others }}>{children}</AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext)
}
export { AppContext, AppProvider, useGlobalContext }