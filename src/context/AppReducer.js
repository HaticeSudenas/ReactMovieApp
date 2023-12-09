export const AppReducer = (state, action) => {
    switch (action.type) {
        case "ADD_MOVIE_TO_WATCH_LIST":
            let product=state.watchList.find(c=>c.id===action.payload.id)  
        if (product) {
          
          return{
            ...state
          }
        }
        else{
            return { ...state, watchList: [...state.watchList, action.payload] };
        }
        case "REMOVE_MOVIE_TO_WATCH_LIST":
           return {
            ...state,
            watchList:state.watchList.filter(c=>c.id!==action.payload)
          };
           case "ADD_MOVIE_TO_WATCHED":
            return{
              ...state,
              watchList:state.watchList.filter(c=>c.id!==action.payload.id),
              watched:[...state.watched,action.payload],
            } 
            case "MOVE_TO_WATCHED":
            return{
              ...state,
              watched:state.watched.filter(c=>c.id!==action.payload.id),
              watchList:[...state.watchList,action.payload],
            } 

            case "REMOVE_MOVIE_TO_WATCHED":
           return {
            ...state,
            watched:state.watched.filter(c=>c.id!==action.payload)
          };
        default:
            return state;
    };

}