import { ADD, DELATE, EDIT, COMPLETE } from "./actionType";

const init={
    todos:[
        {
            id:Math.random(),
            action:"finish redux checkpoint",
            isDone:"false",
        },
        {
            id:Math.random(),
            action:"read api courses",
            isDone:"false",
        },
        {
            id:Math.random(),
            action:"finish the redux courses",
            isDone:"true",
        },
        {
            id:Math.random(),
            action:"add style to the project",
            isDone:"true",
        },

    ],
}

export const reducer=(state=init, {type, payload})=>{
    switch (type) {
        case ADD:

            return{
                ...state,todos:[...state.todos,payload]
            }
            case DELATE:

                return{
                    ...state,todos:state.todos.filter(el=> el.id!==payload)
                }
                case EDIT:

                    return{
                        ...state,todos:state.todos.map((el)=>el.id===payload.id?payload:el)
                    }
                    case COMPLETE:

                        return{
                            ...state,todos:state.todos.map(el=>el.id===payload?{...el,isDone:!el.isDone}:el)
                        }
        default:
            return state;
    }
}

export default reducer