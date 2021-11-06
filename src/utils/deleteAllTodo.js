import {delTodo} from "./delTodo"

export function deleteAllTodo(list){
  return new Promise((resolve)=>{
    list.map((todo)=>delTodo(todo.id))
    resolve()
  })
}

