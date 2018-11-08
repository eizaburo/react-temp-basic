const initialState = {
    user: {
        name: 'hoge',
        age: 33,
    }
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case 'UPDATE_NAME':
            return Object.assign({}, state, {
                user: {
                    name: action.name
                }
            });
        default:
            return state;
    }
}

export default userReducer;