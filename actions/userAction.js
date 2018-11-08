export const updateName = name => (
    {
        type: 'UPDATE_NAME',
        name: name
    }
);

export const getHelloByThunk = () => async dispatch => {
    const response = await fetch('http://www.bluecode.jp/test/api.php');
    const json = await response.json();

    dispatch({
        type: 'GET_HELLO_BY_THUNK',
        name: json.message
    });

}

export const getHelloBySaga = () => (
    {
        type: 'GET_HELLO_BY_SAGA',
    }
);