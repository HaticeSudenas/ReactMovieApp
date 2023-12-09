import { createContext, useEffect, useReducer } from "react";
import { AppReducer } from "./AppReducer";
import { json } from "react-router-dom";

export const GlobalContext=createContext();

const initialState={
    watchList:localStorage.getItem("watchedListed")?JSON.parse(localStorage.getItem("watchedListed")):[],
    watched:localStorage.getItem("watched")?JSON.parse(localStorage.getItem("watched")):[]
};


export const GlobalProvider=(props)=>{

    const [state,dispatch]=useReducer(AppReducer,initialState);

    const addMovieToWatchList=(movie)=>{
        dispatch({type:"ADD_MOVIE_TO_WATCH_LIST",payload:movie});
    }

    const removeMovieToWatchList=(id)=>{
        dispatch({type:"REMOVE_MOVIE_TO_WATCH_LIST",payload:id});
    }

    const addMovieToWatched=(movie)=>{
        dispatch({type:"ADD_MOVIE_TO_WATCHED",payload:movie});
    }

    const moveToWatchList=(movie)=>{
        dispatch({type:"MOVE_TO_WATCHED",payload:movie})
    }

    const removeMovieToWatched=(id)=>{
        dispatch({type:"REMOVE_MOVIE_TO_WATCHED",payload:id});
    }

    useEffect(() => {
      localStorage.setItem("watchedListed",JSON.stringify(state.watchList))
      localStorage.setItem("watched",JSON.stringify(state.watched))
    }, [state])
    

    return(
        <GlobalContext.Provider value={{watchList:state.watchList,watched:state.watched,addMovieToWatchList,removeMovieToWatchList,addMovieToWatched,moveToWatchList,removeMovieToWatched}}>{props.children}</GlobalContext.Provider>
       
    )
} 