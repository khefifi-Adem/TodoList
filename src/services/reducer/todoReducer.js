const reducer= (state=[{id:'123456789',description:'please work',done:false}],action) =>{
    switch (action.type) {
        case "add":
            return state + action.payload;
        default: return state;
    }
};

export default reducer;