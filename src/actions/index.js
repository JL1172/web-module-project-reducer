export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const APPLY_NUMBER_TO_MEMORY = "APPLY_NUMBER_TO_MEMORY";
export const GET_NUMBER_FROM_MEMORY = "GET_NUMBER_FROM_MEMORY";
export const CLEAR_MEMORY = "CLEAR_MEMORY";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operation) => {
    return{type : CHANGE_OPERATION, payload : operation};
}

export const clearDisplay = () => {
    return{type : CLEAR_DISPLAY};
}

export const applyNumberToMemory = () => {
    return{type : APPLY_NUMBER_TO_MEMORY};
}

export const getNumberFromMemory = (number) => {
    return{type : GET_NUMBER_FROM_MEMORY, payload : number};
}

export const clearMemory = () => {
    return{type : CLEAR_MEMORY}; 
}

