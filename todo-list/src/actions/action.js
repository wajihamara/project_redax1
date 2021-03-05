import {ADD_TODO}from "../constants/actionType";

export function addToList (payload){
    return {type:ADD_TODO,payload}
}