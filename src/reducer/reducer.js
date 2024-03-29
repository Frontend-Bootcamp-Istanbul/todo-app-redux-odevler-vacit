import { SET_FILTER, SET_TODOS, ADD_TODO, REMOVE_TODO, REMOVE_ALL, SET_INPUT,GET_INPUT } from "../actions/actions";

const rootReducer = function (
    state = {
        activeFilter: "all", todos: [], inputVal: ""
    }, action) {

    switch (action.type) {
        case SET_FILTER:
            return { ...state, activeFilter: action.activeFilter };

        case SET_TODOS:
            return { ...state, todos: action.todos }

        case ADD_TODO:
            return { ...state, todos: state.todos.concat([action.todo]) }

        case REMOVE_TODO:
            const newTodos = state.todos.filter((todo) => todo.id !== action.id);
            return {
                ...state,
                todos: newTodos
            };

        case REMOVE_ALL:
            return { ...state, todos: [] }

        case SET_INPUT:
            return { ...state, inputVal: action.input }

        case GET_INPUT:
            return { inputVal:state.inputVal }

        default:
            return state;
    }

};

export default rootReducer