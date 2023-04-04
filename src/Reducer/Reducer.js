function Reducer(state, action) {
    switch(action.type) {
        case "hotel" : return {hotelValue: action.value}

        default: return state
    }
}
    
   
export default Reducer;