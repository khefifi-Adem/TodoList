export const todoadd = (todo) => {
    return (dispatch)=> {
        dispatch ({
            type: 'add',
            playload: todo
        })
    }
}