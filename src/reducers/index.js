import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, GET_NUMBER_FROM_MEMORY, CLEAR_MEMORY, APPLY_NUMBER_TO_MEMORY, ENTER_VALUE} from './../actions';

export const initialState = {
    total: [],
    operation: "",
    memory: 0,
    oldValue : [],
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            });

        case(APPLY_NUMBER):
        if (!state.operation) {
            state.oldValue = [...state.oldValue,action.payload];
            let joined = state.oldValue.join("").replace(/,/g,"");
        
            return({ 
                ...state, 
                oldValue : joined,
        })} else { 
            state.total = [...state.total,action.payload];
            let joined = state.total.join("").replace(/,/g,"");
           
            return({ 
                ...state, 
                total: joined,
            });
        }
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });
        case(CLEAR_DISPLAY) : 
            return({
                ...state,
                total : [],
                oldValue : [],
                operation : "",
            });
        case(APPLY_NUMBER_TO_MEMORY) :
            return({
                ...state,
                memory : state.total
            })
        case(GET_NUMBER_FROM_MEMORY) :
        console.log(state)
            return({
                ...state,
                total : calculateResult(state.oldValue, state.memory, state.operation)
            })
        case(CLEAR_MEMORY) :
            return({...state,
                memory : 0
            })
        case(ENTER_VALUE) : 
            return({
                ...state,
                total : calculateResult(state.total,state.oldValue, state.operation),
            })
    }
}

export default reducer;