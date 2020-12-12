const init = (state, action) => {
    switch (action.type) {
        case "NAME":
            state = {...state, name: action.name}
            break
        case "SURNAME":
            state = {...state, surname: action.surname}
            break    
        case "DATE":
            state = {...state, date: action.date}
            break
        case "SELECT":
            state = {...state, select: action.select}
            break
        case "RESET":
            state = {}
            break
        default:
            console.log("Поля не найдены")
            return
    }
    
    return state;
}


export default init