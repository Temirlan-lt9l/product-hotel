function Reducer(state, action) {
    switch(action.type) {
        case "hotel" : return {hotelValue: action.value}
        case "filter" : return {filter: action.value}

        default: return state
    }
}
    
   
export default Reducer;