const initialState = {
    user: {
        name: 'hoge',
        age: 33,
    }
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default userReducer;