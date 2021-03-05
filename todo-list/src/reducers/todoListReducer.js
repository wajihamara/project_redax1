const initState={items:[{id:1,item:'item 1'},{id:2,item:'item 1'}]}
const todoListReducer=(state=initState,action)=>{
    if (action.type===ADD_TODO){
    return state=[...state,action.payload]
}
return state;
}
export default todoListReducer;