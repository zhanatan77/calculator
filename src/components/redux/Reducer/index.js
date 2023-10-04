import { ADD_MONEY, DEL_MONEY } from "../ActionsType";
const initialState = {
    money: "",
};
export const Reducer =  (state = initialState, action ) => {
    switch(action.type) {
        case "ADD_MONEY": 
        return {...state, money: state.money  + action.payload};
        case "AC_MONEY":
            return {...state, money: ""};
        case DEL_MONEY:
                return {...state, money: state.money.slice(0, -1)};
        default: 
        return state;
    }
};


// action 
// action.type