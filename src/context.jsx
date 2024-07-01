import { createContext, useEffect, useReducer } from 'react';

import reducer from './reducer';

const initialState = {
    title: "",
    name: "",
    image: "",
    services: [],
};

const API = "https://666b0d847013419182d2132e.mockapi.io/api/v1/skills";


const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const updateHomePage = () => {
        return dispatch(
            {
                type: "UPDATE_HOME_PAGE",
                payload: {
                    title: "Adnane AIT MAGOURT",
                    name: "Adnane AIT MAGOURT",
                    image: "./images/hero.svg",
                }
            }
        );
    }
    
    const updateAboutPage = () => {
        return dispatch(
            {
                type: "UPDATE_ABOUT_PAGE",
                payload: {
                    title: "About Me",
                    name: "Adnane AIT MAGOURT",
                    image: "./images/about1.svg",
                }
            }
        );
    }

    const getServices = async (url) => {
    try{
        const res = await fetch(url, {method: "GET"});
        const data = await res.json();
        dispatch({type: "GET_SERVICES", payload: data})
    }catch(error){
        console.log(error);
    }
    }
    
    useEffect(() => {
        getServices(API);
    }, []);

    return <AppContext.Provider value={{...state, updateHomePage, updateAboutPage}}>{children}</AppContext.Provider>;
}

export { AppProvider, AppContext };
