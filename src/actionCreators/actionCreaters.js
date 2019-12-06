import {SET_FILTER, SET_TODOS, ADD_TODO, REMOVE_TODO,REMOVE_ALL} from "../actions/actions";

export function setFilter(filter){
    return {type: SET_FILTER, activeFilter: filter}
}

export function setTodos(todos){
    return {type: SET_TODOS, todos}
}

export function addTodo(todo){
    return {type: ADD_TODO, todo}
}

export function removeTodo(id){
    return {type: REMOVE_TODO, id}
}
export function removeAll(){
    return {type: REMOVE_ALL}
}