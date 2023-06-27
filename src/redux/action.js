import { ADD , DELATE, EDIT, COMPLETE} from "./actionType";


export const handleAdd=(newTask)=>{
    return{
        type: ADD,
        payload: newTask
    };
   
};

export const handleDelete=(id)=>{
    return{
        type: DELATE,
        payload: id
    };
   
};
export const handleEdit=(id)=>{
    return{
        type: EDIT,
        payload: id
    };
   
};
export const handleComplete=(id)=>{
    return{
        type:COMPLETE,
        payload: id
    };
   
};