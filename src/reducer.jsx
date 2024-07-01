const reducer = (state, action) => {
    if (action.type === "UPDATE_HOME_PAGE") {
        return {
            ...state,
            title: action.payload.title,
            name: action.payload.name,
            image: action.payload.image,
        };
    }

    if (action.type === "UPDATE_ABOUT_PAGE") {
        return {
            ...state,
            title: action.payload.title,
            name: action.payload.name,
            image: action.payload.image,
        };
    }

    if (action.type === "GET_SERVICES") {
        return {
            ...state,
            services: action.payload,
        };
    }

    return state;
}

export default reducer;