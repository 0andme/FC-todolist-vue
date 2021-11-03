// getTodoList 함수로 받아온 리스트 항목을
// 항목의 done속성을 이용하여 두개의 리스트로 필터링
// 리스트를 각각 TodoListDo,TodoListDone 컴포넌트로 보냄
<template>
<!-- dolistList -->
<TodoListDo :doList="doList"/> 
<!--  doneList -->
<TodoListDone :doneList="doneList"/> 


</template>
<script>
import {getTodoList} from "~/utils/getTodoList"
import TodoListDo from "~/components/TodoListDo"
import TodoListDone from "~/components/TodoListDone"

export default {
  components:{
  TodoListDo,
  TodoListDone
  },
  data() {
    return {
      todoList:[],
      doList:[],
      doneList:[]
    
    }
  },
  mounted(){
    getTodoList()
      .then(todos=>{
        this.todoList=[...todos]
        this.doList=[...todos.filter(todo=>todo.done===false)]
        this.doneList=[...todos.filter(todo=>todo.done===true)]
        
      })
      
  }
  
}
</script>