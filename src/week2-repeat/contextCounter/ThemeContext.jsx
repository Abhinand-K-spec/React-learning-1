import { createContext, useContext, useEffect, useReducer } from "react";


const themeContext = createContext();


function reducer(state, action){
    switch(action.type){
        case 'Toggle':
            return state === 'light'?'dark':'light';
        default:
            return state;
    }
}

export function ThemeContextProvider({children}){
    const[theme,dispatchTheme] = useReducer(reducer,'light');

    useEffect(()=>{
        document.documentElement.setAttribute('data-theme',theme);
    },[theme])


    return(<themeContext.Provider value={{theme,dispatchTheme}}>
        {children}
    </themeContext.Provider>)
}

export function useTheme(){
    return useContext(themeContext);
}