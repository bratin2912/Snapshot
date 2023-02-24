const Reducer = (state, action) => {
    switch (action.type) {
        case "GET":
            return {
                ...state,
                isLoading: false,
                data: action.payload.photoData
            }
        case "CNGQUERY":
            return {
                ...state,
                isLoading: true,
                query: action.payload.query
            }
        default:
            return null;
    }
}

export default Reducer;