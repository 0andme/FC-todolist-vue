import {deleteTodo} from "./deleteTodo"

export function deleteAllTodo(list){
  return new Promise((resolve)=>{
    list.map((todo)=>deleteTodo(todo.id))
    resolve()
  })
}