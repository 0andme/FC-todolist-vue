// TodoListBox
// getTodoList 함수로 받아온 리스트 항목을
// 항목의 done속성을 이용하여 두개의 리스트로 필터링
// 리스트를 각각 TodoListDo,TodoListDone 컴포넌트로 보냄
<template>
<!-- doList -->
<TodoListDo :doList="doList"/> 
<!--  doneList -->
<TodoListDone :doneList="doneList"/> 
<!-- 페이지 새로고침 버튼 -->
<button class="reloadBtn" @click="reload">
  <i class="fas fa-redo-alt"></i>
</button>

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
  created(){
    getTodoList()
      .then(todos=>{
        this.todoList=[...todos]
        this.doList=this.todoList.filter(todo=>todo.done===false)
        this.doneList=this.todoList.filter(todo=>todo.done===true)
        
      })
      
  },
  methodsl:{
    reload(){
      location.reload()
    }
  }
  
}
</script>